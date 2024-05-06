import express from 'express'
import usuariosRoutes from './routes/usersRoutes.js'
import publicacionesRoutes from './routes/publicacionesRoutes.js'
import comentariosRoutes from './routes/comentariosRoutes.js'
import categoriasRoutes from './routes/categoriasRoutes.js'

const app = express()

app.use(express.json())

// Rutas
app.use('/api', usuariosRoutes)
app.use('/api', publicacionesRoutes)
app.use('/api', comentariosRoutes)
app.use('/api', categoriasRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
