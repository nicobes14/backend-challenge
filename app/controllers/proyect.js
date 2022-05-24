const { fn, col, where } = require('sequelize')
const { catchErrors } = require('../helpers/errors')
const { NotFoundError } = require('./errors/httpError')
const { db } = require('../database/models')

const { proyect } = db

const index = async (req, res) => {
  const { size, page, proyectname } = req.query

  const options = {
    limit: parseInt(size) || 10,
    offset: (parseInt(page) - 1) * parseInt(size),
    where: {},
    include: 'usersInProyect',
  }
  if (proyectname) {
    options.where = {
      proyectname: where(
        fn('lower', col('proyectname')),
        'LIKE',
        `%${proyectname}%`
      ),
    }
  }
  const proyects = await proyect.findAndCountAll(options)
  res.status(200).json(proyects.rows)
}

const show = async (req, res) => {
  const { id } = req.params
  const proyectFinded = await proyect.findByPk(id, {
    include: 'usersInProyect',
  })
  if (!proyectFinded) throw new NotFoundError()
  res.status(201).json(proyectFinded)
}

const destroy = async (req, res) => {
  const { id } = req.params
  const deletedRows = await proyect.destroy({ where: { id } })
  if (deletedRows === 0) throw new NotFoundError()
  res.status(204).json({ deleted: true })
}

const findOrCreate = async (req, res) => {
  const {
    proyectname,
    description,
    status,
    managerId,
    newProyectName,
    usersInProyectId,
  } = req.body

  const [proyectCreated, created] = await proyect.findOrCreate({
    where: { proyectname },
    defaults: {
      proyectname,
      description,
      status,
      managerId,
    },
  })
  if (!created) {
    await proyectCreated.update({
      proyectname: newProyectName || proyectname,
      description,
      status,
      managerId,
    })
    usersInProyectId?.map(async (userId) => {
      await proyectCreated.addUsersInProyect(userId)
    })
    await proyectCreated.save()
    res.status(201).json(proyectCreated)
  } else {
    usersInProyectId?.map(async (userId) => {
      await proyectCreated.addUsersInProyect(userId)
    })
    await proyectCreated.save()
    res.status(201).json(proyectCreated)
  }
}

const findOrCreateById = async (req, res) => {
  const { id } = req.params
  const { proyectname, description, status, managerId, usersInProyectId } =
    req.body
  const proyectFinded = await proyect.findByPk(id)
  if (!proyectFinded) {
    const proyectCreated = await proyect.create({
      proyectname,
      description,
      status,
      managerId,
    })
    usersInProyectId?.map(async (userId) => {
      await proyectCreated.addUsersInProyect(userId)
    })
    res.status(201).json(proyectCreated)
  } else {
    await proyectFinded.update({
      proyectname,
      description,
      status,
      managerId,
    })
    usersInProyectId?.map(async (userId) => {
      await proyectFinded.addUsersInProyect(userId)
    })
    await proyectFinded.save()
    res.status(201).json(proyectFinded)
  }
}

module.exports = {
  index: catchErrors(index),
  show: catchErrors(show),
  delete: catchErrors(destroy),
  findOrCreate: catchErrors(findOrCreate),
  findOrCreateById: catchErrors(findOrCreateById),
}
