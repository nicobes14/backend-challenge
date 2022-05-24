const { catchErrors } = require('../helpers/errors')

const store = async (req, res) => {
  res.status(201).json({ status: true })
}

module.exports = {
  store: catchErrors(store),
}
