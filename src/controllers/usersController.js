import connection from '../db.js'

export const getUsers = async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT `usuarios_id`, `usuarios_nombre`, `email` FROM `usuarios`')
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
}

export const getUserById = async (req, res) => {
  const userId = req.params.userId
  try {
    const [rows] = await connection.query('SELECT `usuarios_id`, `usuarios_nombre`, `email` FROM `usuarios` WHERE `usuarios_id` = ?', [userId])
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
    res.json(rows[0])
  } catch (error) {
    console.error('Error al obtener usuario:', error)
    res.status(500).json({ error: 'Error al obtener usuario' })
  }
}

export const createUser = async (req, res) => {
  const { usuariosNombre, email } = req.body
  try {
    const result = await connection.query('INSERT INTO `usuarios` (`usuarios_nombre`, `email`) VALUES (?, ?)', [usuariosNombre, email])
    res.status(201).json({ message: 'Usuario creado correctamente', userId: result[0].insertId })
  } catch (error) {
    console.error('Error al crear usuario:', error)
    res.status(500).json({ error: 'Error al crear usuario' })
  }
}

export const updateUser = async (req, res) => {
  const userId = req.params.userId
  const { usuariosNombre, email } = req.body
  try {
    await connection.query('UPDATE `usuarios` SET `usuarios_nombre` = ?, `email` = ? WHERE `usuarios_id` = ?', [usuariosNombre, email, userId])
    res.json({ message: 'Datos de usuario actualizados correctamente' })
  } catch (error) {
    console.error('Error al actualizar datos de usuario:', error)
    res.status(500).json({ error: 'Error al actualizar datos de usuario' })
  }
}

export const deleteUser = async (req, res) => {
  const userId = req.params.userId
  try {
    await connection.query('DELETE FROM `usuarios` WHERE `usuarios_id` = ?', [userId])
    res.json({ message: 'Cuenta de usuario eliminada correctamente' })
  } catch (error) {
    console.error('Error al eliminar cuenta de usuario:', error)
    res.status(500).json({ error: 'Error al eliminar cuenta de usuario' })
  }
}

export const getAllUsersForAdmin = async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT `usuarios_id`, `usuarios_nombre`, `email` FROM `usuarios`')
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
}
