import { FastifyInstance } from 'fastify'
import { create } from './create.ts'
import { list } from './list.ts'
import { getDetails } from './get-details.ts'
import { update } from './update.ts'
import { remove } from './delete.ts'
import { verifyJWT } from '../../middlewares/verify-jwt.ts'

export async function salesRoutes(app: FastifyInstance) {
  app.post('/sales', create)
  app.get('/sales', { onRequest: [verifyJWT] }, list)
  app.get('/sales/:saleId', { onRequest: [verifyJWT] }, getDetails)
  app.put('/sales/:saleId', { onRequest: [verifyJWT] }, update)
  app.delete('/sales/:saleId', { onRequest: [verifyJWT] }, remove)
}
