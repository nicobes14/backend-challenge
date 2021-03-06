require('dotenv').config()
const path = require('path')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../docs')
const { sequelize, fill } = require('./database/models')

const { notFound, productionErrors } = require('./helpers/errors')

// Setting
const PORT = process.env.PORT || 3000

// Middleware
// Para poder rellenar el req.body
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  process.env.SCHEME_AND_HOST = `${req.protocol}://${req.get('host')}`
  next()
})

app.use(cors())
// Rutas
app.use(require('./routes'))

app.get('/', (req, res) => res.redirect('/api-docs'))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(notFound)
app.use(productionErrors)

// Arrancamos el servidor
const server = app.listen(PORT, async () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(
      `Starting ${process.env.NODE_ENV} server at http://localhost:${PORT}`
    )
  }
  await sequelize.sync({ force: false }).then(() => {
    fill()
  })
})

module.exports = {
  app,
  server,
}
