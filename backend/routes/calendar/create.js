import express from 'express'
import { createDate, createUser, confirmToken } from '../../database/calendar/create'

const routerCreate = express.Router()

/**
 * @swagger
 * /calendar/:
 *   post:
 *     summary: Create a new calendar date
 *     description: Endpoint to create a new calendar date.
 *     tags:
 *      - calendar
 *     parameters:
 *        - in: body
 *          name: body
 *          description: Date and time information for the new calendar date.
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              DateTimeTo:
 *                type: string
 *                description: The date and time to be added to the calendar.
 *              Motive:
 *                type: string
 *                description: The motive or reason for adding the date to the calendar.
 *            required:
 *              - DateTimeTo
 *              - Motive
 *            example:
 *              DateTimeTo: "2022-12-31T23:59:59"
 *              Motive: "New Year's Eve"
 *     responses:
 *       200:
 *         description: Successfully created a new calendar date.
 *       400:
 *         description: Invalid request body or missing required fields.
 *       500:
 *         description: Internal server error.
 */
routerCreate.post('/calendar', async (req, res) => {
  const { DateTimeTo, Motive } = req.body
  if (!DateTimeTo || !Motive) return res.status(400).json({ success: false, message: 'Missing required fields.' })
  const DateTo = DateTimeTo
  const response = await createDate({ DateTo, Motive })
  if (!response.success) return res.status(500).json(response)
  return res.status(200).json({
    success: true,
    message: 'Successfully created a new calendar date.',
  })
})

/**
 * @swagger
 * /create/user/:
 *   post:
 *     summary: Create a new user to use the calendar
 *     description: Endpoint to create a new user to use the calendar
 *     tags:
 *      - calendar
 *     parameters:
 *        - in: body
 *          name: body
 *          description: User info.
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: Email.
 *              username:
 *                type: string
 *                description: username.
 *              password:
 *                type: string
 *                description: password.
 *            required:
 *              - email
 *              - password
 *              - username
 *            example:
 *              email: "danarvare2003@gmail.com"
 *              password: "Dinamo123"
 *              username: "Danival"
 *     responses:
 *       200:
 *         description: Successfully created a new calendar date.
 *       400:
 *         description: Invalid request body or missing required fields.
 *       500:
 *         description: Internal server error.
 */
routerCreate.post('/create/user', async (req, res) => {
  const { email, password, username } = req.body
  if (!email || !password || !username) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields.',
    })
  }
  const data = await createUser({ email, password, username })
  if (!data) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    })
  }

  return res.status(200).json({
    success: true,
    message: 'Successfully created a new user.',
    data,
  })
})

routerCreate.get('/verify-email', async (req, res) => {
  const { token } = req.query
  console.log(token)

  try {
    // Verifica el token de verificación en Supabase
    const error = await confirmToken({ token })

    if (error) {
      return res.status(400).send('Error al verificar el correo electrónico.')
    }

    res.status(200).send('Correo electrónico verificado correctamente.')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error al verificar el correo electrónico.')
  }

  return null // Add this line to return a value at the end of the function
})

export default routerCreate
