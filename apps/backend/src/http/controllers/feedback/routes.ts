import type { FastifyInstance } from "fastify";
import { register } from "./register.ts";
import {deleteFeedback} from './delete.ts'
import { getAllFeedbacks } from "./getAll.ts";
import { verifyJWT } from "../../middlewares/verify-jwt.ts";



export function feedbackRoutes(app: FastifyInstance) {
    app.post('/feedbacks', register)
    app.delete('/feedbacks/:feedbackId', { onRequest: [verifyJWT] }, deleteFeedback)
    app.get('/feedbacks', getAllFeedbacks)
}