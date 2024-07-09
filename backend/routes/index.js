import { Router } from 'express'
import { obtainProjects } from '../database'

const router = Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *       500:
 *         description: Error interno del servidor
 */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

router.get('/projects', (req, res) => {
  obtainProjects().then((projects) => {
    res.json(projects)
  })
})

export default router
