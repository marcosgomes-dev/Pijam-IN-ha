import type { FastifyInstance } from "fastify";
//import { register } from "./register.ts";
// import { authenticate } from "../auth/login.ts";
import { update } from "./update.ts";
import { deleteUser } from "./delete.ts";
import { getAllUsers } from "./getAll.ts";
import { verifyJWT } from "../../middlewares/verify-jwt.ts";


export function userRoutes(app: FastifyInstance) {
    // app.post('/authenticate', authenticate)
    //app.post('/users', register)
    app.patch('/users/:userId', { onRequest: [verifyJWT] }, update)
    app.delete('/users/:userId', { onRequest: [verifyJWT] }, deleteUser)
    app.get('/users', { onRequest: [verifyJWT] }, getAllUsers)

    
}