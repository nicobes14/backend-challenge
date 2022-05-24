const proyects = require('./proyects')

module.exports = {
  paths: {
    '/proyects': {
      ...proyects.list,
      ...proyects.findOrCreate,
    },
    '/proyects/{id}': {
      ...proyects.findOrCreateById,
      ...proyects.show,
      ...proyects.destroy,
    },
  },
}
