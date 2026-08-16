import type { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrismaUsersRepository } from '../../../repositories/prisma/prisma-users-repository.ts'
import { RegisterUseCase } from '../../../use-cases/users/register-user-use-case.ts'
import { UserAlreadyExists } from '../../../errors/user-already-exists-error.ts'

export async function registerController(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(6),
  })

  const { name, email, username, password } = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    await registerUseCase.execute({
      name,
      email,
      username,
      password,
    })

    return reply.status(201).send({ message: 'Usuário registrado com sucesso' })
  } catch (err) {
    if (err instanceof UserAlreadyExists) {
      return reply.status(409).send({ message: 'E-mail ou nome de usuário já está em uso' })
    }

    return reply.status(400).send({ message: 'Erro ao registrar usuário' })
  }
}
