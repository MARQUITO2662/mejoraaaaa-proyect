import connection from '../db'

export const getPublicacionesByCategoriaId = async (req, res) => {
  const categoriaId = req.params.categoriaId
  try {
    const [rows] = await connection.query('SELECT * FROM `publicaciones` WHERE `categoria_id` = ?', [categoriaId])
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener publicaciones por categoría:', error)
    res.status(500).json({ error: 'Error al obtener publicaciones por categoría' })
  }
}
