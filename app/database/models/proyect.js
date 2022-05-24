'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class proyect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      proyect.belongsTo(models.user, {
        foreignKey: 'managerId',
        onDelete: 'CASCADE',
      })
      models.user.hasOne(models.proyect, { foreignKey: 'managerId' })
      proyect.belongsToMany(models.user, {
        through: 'user_proyect',
        as: 'usersInProyect',
        foreignKey: 'proyectId',
        constraints: false,
      })
      models.user.belongsToMany(models.proyect, {
        through: 'user_proyect',
        foreignKey: 'userId',
        as: 'proyects',
        constraints: false,
      })
    }
  }
  proyect.init(
    {
      proyectname: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      managerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'proyect',
    }
  )
  return proyect
}
