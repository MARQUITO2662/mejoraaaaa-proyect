import express from 'express'
import { getAllPublicaciones, getPublicacionById, createPublicacion, updatePublicacion, deletePublicacion } from '../controllers/publicacionesController'

const router = express.Router()

// Rutas para manipular publicaciones
router.get('/', getAllPublicaciones)
router.get('/:publicacionId', getPublicacionById)
router.post('/', createPublicacion)
router.put('/:publicacionId', updatePublicacion)
router.delete('/:publicacionId', deletePublicacion)

export default router
