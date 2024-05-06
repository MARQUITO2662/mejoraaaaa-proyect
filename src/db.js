import { createConnection } from 'mysql2/promise'
import dotenv from 'dotenv'

// Cargar las variables de entorno desde el archivo .env
dotenv.config()

// Crear la conexión a la base de datos
const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
})

export default connection
