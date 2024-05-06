import express from 'express'
import * as usersController from '../controllers/usersController.js'

const router = express.Router()

// Rutas para manipular usuarios
router.get('/', usersController.getUsers)
router.get('/:userId', usersController.getUserById)
router.post('/', usersController.createUser)
router.put('/:userId', usersController.updateUser)
router.delete('/:userId', usersController.deleteUser)

export default router
