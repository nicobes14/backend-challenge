const findOrCreateById = require('./findOrCreateById')
const list = require('./list')
const findOrCreate = require('./findOrCreate')
const destroy = require('./delete')
const show = require('./show')

module.exports = {
  findOrCreate,
  list,
  findOrCreateById,
  destroy,
  show,
}
