const Joi = require('joi')

const paginationSchema = Joi.object({
  size: Joi.number().integer().min(1).max(100), // .default dont work
  page: Joi.number().integer().min(1),
})

const validatePagination = (req, res, next) => {
  const result = paginationSchema.validate(req.query, { abortEarly: false })
  if (!result.error) {
    if (!req.query.page) req.query.page = 1
    if (!req.query.size) req.query.size = 10
    next()
  } else {
    const errors = result.error.details.map((err) => ({ message: err.message }))
    res.status(400).json(errors)
  }
}
module.exports = { validatePagination }
