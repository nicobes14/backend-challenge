const Joi = require('joi')

const proyectSchema = Joi.object({
  proyectname: Joi.string().required().min(3).max(30),
  description: Joi.string().required().min(3),
  status: Joi.boolean().default(false),
  managerId: Joi.number().required(),
  usersInProyectId: Joi.array().items(Joi.number()).empty(),
  newProyectName: Joi.string().min(3).max(30),
})

const validateProyect = (req, res, next) => {
  const result = proyectSchema.validate(req.body, { abortEarly: false })
  if (!result.error) {
    next()
  } else {
    const errors = result.error.details.map((err) => ({ message: err.message }))
    res.status(400).json(errors)
  }
}

module.exports = {
  validateProyect,
}
