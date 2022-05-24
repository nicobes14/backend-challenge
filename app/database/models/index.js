'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]
const mysql = require('mysql2/promise')
const db = {}

// create db if it doesn't already exist
const createDatabase = async () => {
  const { host, port, username: user, password, database } = config
  console.log(user)
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  })
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)

  await sequelize.sync({ force: false }).then(() => {
    db.fillUsersTable()
    db.fillProyectsTable()
  })
}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.fillUsersTable = () => {
  db.user.count().then((count) => {
    if (count === 0) {
      const userSeed = require('../seeders/1-user')
      db.user.bulkCreate(userSeed).then('Users table filled')
    }
  })
}

db.fillProyectsTable = () => {
  db.proyect.count().then((count) => {
    if (count === 0) {
      const proyectSeed = require('../seeders/2-proyect')
      db.proyect.bulkCreate(proyectSeed).then('Proyects table filled')
    }
  })
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = { db, createDatabase }
