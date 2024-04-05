const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ActivityArchive extends Model {}

ActivityArchive.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activityDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'activityArchive',
  }
);

module.exports = ActivityArchive;
