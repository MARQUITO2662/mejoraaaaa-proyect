import express from 'express'
import * as categoriasController from '../controllers/categoriasController'

const router = express.Router()

// Rutas para manipular categorías
router.get('/api/publicaciones/categorias/:categoriaId', categoriasController.getPublicacionesByCategoriaId)

export default router
