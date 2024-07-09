import { Router } from 'express'

const router = Router()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

export default router
