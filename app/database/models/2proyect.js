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
      proyect.belongsToMany(models.user, {
        through: 'user_proyect',
        as: 'usersInProyect',
        foreignKey: 'proyectId',
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
