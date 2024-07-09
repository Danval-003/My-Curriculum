import swaggerJsdoc from 'swagger-jsdoc'
import { serve, setup } from 'swagger-ui-express'

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
  },
  apis: ['./routes/*.js', './routes/*/*.js'], // Ruta a los archivos que contienen las rutas de tu API
}

const specs = swaggerJsdoc(options)

export default (app) => {
  app.use('/api-docs', serve, setup(specs))
}
