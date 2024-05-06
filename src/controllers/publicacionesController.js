import connection from '../db'

export const getAllPublicaciones = async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT `publicaciones_id`, `titulo`, `contenido`, `usuarios_id` FROM `publicaciones`')
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener publicaciones:', error)
    res.status(500).json({ error: 'Error al obtener publicaciones' })
  }
}

export const getPublicacionById = async (req, res) => {
  const publicacionId = req.params.publicacionId
  try {
    const [rows] = await connection.query('SELECT `publicaciones_id`, `titulo`, `contenido`, `usuarios_id` FROM `publicaciones` WHERE `publicaciones_id` = ?', [publicacionId])
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Publicación no encontrada' })
    }
    res.json(rows[0])
  } catch (error) {
    console.error('Error al obtener publicación:', error)
    res.status(500).json({ error: 'Error al obtener publicación' })
  }
}

export const createPublicacion = async (req, res) => {
  const { titulo, contenido, usuariosId } = req.body
  try {
    const result = await connection.query('INSERT INTO `publicaciones` (`titulo`, `contenido`, `usuarios_id`) VALUES (?, ?, ?)', [titulo, contenido, usuariosId])
    res.status(201).json({ message: 'Publicación creada correctamente', publicacionId: result[0].insertId })
  } catch (error) {
    console.error('Error al crear la publicación:', error)
    res.status(500).json({ error: 'Error al crear la publicación' })
  }
}

export const updatePublicacion = async (req, res) => {
  const publicacionId = req.params.publicacionId
  const { titulo, contenido } = req.body
  try {
    await connection.query('UPDATE `publicaciones` SET `titulo` = ?, `contenido` = ? WHERE `publicaciones_id` = ?', [titulo, contenido, publicacionId])
    res.json({ message: 'Publicación actualizada correctamente' })
  } catch (error) {
    console.error('Error al actualizar la publicación:', error)
    res.status(500).json({ error: 'Error al actualizar la publicación' })
  }
}

export const deletePublicacion = async (req, res) => {
  const publicacionId = req.params.publicacionId
  try {
    await connection.query('DELETE FROM `publicaciones` WHERE `publicaciones_id` = ?', [publicacionId])
    res.json({ message: 'Publicación eliminada correctamente' })
  } catch (error) {
    console.error('Error al eliminar la publicación:', error)
    res.status(500).json({ error: 'Error al eliminar la publicación' })
  }
}
export const getPublicacionesByUserId = async (req, res) => {
  const userId = req.params.userId
  try {
    const [rows] = await connection.query('SELECT `publicaciones_id`, `titulo`, `contenido`, `usuarios_id` FROM `publicaciones` WHERE `usuarios_id` = ?', [userId])
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener publicaciones del usuario:', error)
    res.status(500).json({ error: 'Error al obtener publicaciones del usuario' })
  }
}

export const getPublicacionesByCategoriaId = async (req, res) => {
  const categoriaId = req.params.categoriaId
  try {
    const [rows] = await connection.query('SELECT `publicaciones_id`, `titulo`, `contenido`, `usuarios_id` FROM `publicaciones` WHERE `categoria_id` = ?', [categoriaId])
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener publicaciones por categoría:', error)
    res.status(500).json({ error: 'Error al obtener publicaciones por categoría' })
  }
}

export const searchPublicacionesByTitulo = async (req, res) => {
  const titulo = req.params.titulo
  try {
    const [rows] = await connection.query('SELECT `publicaciones_id`, `titulo`, `contenido`, `usuarios_id` FROM `publicaciones` WHERE `titulo` LIKE ?', [`%${titulo}%`])
    res.json(rows)
  } catch (error) {
    console.error('Error al buscar publicaciones por título:', error)
    res.status(500).json({ error: 'Error al buscar publicaciones por título' })
  }
}
