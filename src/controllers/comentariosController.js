import connection from '../db'

export const getComentariosByPublicacionId = async (req, res) => {
  const publicacionId = req.params.publicacionId
  try {
    const [rows] = await connection.query('SELECT `comentario_id`, `comentario`, `usuario_id` FROM `comentarios` WHERE `publicacion_id` = ?', [publicacionId])
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener comentarios de la publicación:', error)
    res.status(500).json({ error: 'Error al obtener comentarios de la publicación' })
  }
}

export const getComentarioById = async (req, res) => {
  const comentarioId = req.params.comentarioId
  try {
    const [rows] = await connection.query('SELECT `comentario_id`, `comentario`, `usuario_id`, `publicacion_id` FROM `comentarios` WHERE `comentario_id` = ?', [comentarioId])
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Comentario no encontrado' })
    }
    res.json(rows[0])
  } catch (error) {
    console.error('Error al obtener comentario:', error)
    res.status(500).json({ error: 'Error al obtener comentario' })
  }
}

export const updateComentario = async (req, res) => {
  const comentarioId = req.params.comentarioId
  const { comentario } = req.body
  try {
    await connection.query('UPDATE `comentarios` SET `comentario` = ? WHERE `comentario_id` = ?', [comentario, comentarioId])
    res.json({ message: 'Comentario actualizado correctamente' })
  } catch (error) {
    console.error('Error al actualizar el comentario:', error)
    res.status(500).json({ error: 'Error al actualizar el comentario' })
  }
}

export const deleteComentario = async (req, res) => {
  const comentarioId = req.params.comentarioId
  try {
    await connection.query('DELETE FROM `comentarios` WHERE `comentario_id` = ?', [comentarioId])
    res.json({ message: 'Comentario eliminado correctamente' })
  } catch (error) {
    console.error('Error al eliminar el comentario:', error)
    res.status(500).json({ error: 'Error al eliminar el comentario' })
  }
}
