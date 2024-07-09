import createError from 'http-errors'
import express, { json, urlencoded } from 'express'
import { join } from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { config } from 'dotenv'
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import routerCreate from './routes/calendar/create'
import cors from 'cors'

import swaggerConfig from './swagger'

config()

const app = express()

// Utiliza la configuración de Swagger
swaggerConfig(app)

// view engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

// Not use CORS
app.use(cors())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/', routerCreate)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Obtain a image from public/images
app.use('/public', express.static(join(__dirname, 'public')))
// Obtain a image from public/images
app.use('/images', express.static(join(__dirname, 'images')))

// Change favicon
app.use('/favicon.ico', express.static(join(__dirname, 'images', 'favicon.ico')))

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
