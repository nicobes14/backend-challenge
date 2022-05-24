const route = require('express').Router()
const proyectController = require('../controllers/proyect')
const { validateProyect } = require('../middleware/validators/proyectValidator')
const {
  validatePagination,
} = require('../middleware/validators/paginationValidator')

route.post('/', validateProyect, proyectController.findOrCreate)
route.post('/:id', validateProyect, proyectController.findOrCreateById)
route.get('/', validatePagination, proyectController.index)
route.get('/:id', proyectController.show)
route.delete('/:id', proyectController.delete)

module.exports = route
