const route = require('express').Router()
const proyectController = require('../controllers/proyect')

// route.post('/', characterController.store)
route.get('/', proyectController.store)
// route.get('/:id', characterController.show)
// route.put('/:id', characterController.update)
// route.delete('/:id', characterController.destroy)

module.exports = route
