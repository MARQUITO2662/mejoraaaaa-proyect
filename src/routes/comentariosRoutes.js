import express from 'express'
import * as comentariosController from '../controllers/comentariosController'

const router = express.Router()

// Rutas para manipular comentarios
router.get('/api/publicaciones/:publicacionId/comentarios', comentariosController.getComentariosByPublicacionId)
router.get('/api/comentarios/:comentarioId', comentariosController.getComentarioById)
router.put('/api/comentarios/:comentarioId', comentariosController.updateComentario)
router.delete('/api/comentarios/:comentarioId', comentariosController.deleteComentario)

export default router
