import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class ActivityType extends Model {}

ActivityType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activityTypeName: {
      type: DataTypes.STRING,
    },
    activityTypeDescription: {
      type: DataTypes.STRING,
    },
    activityTypeImage: {
      type: DataTypes.STRING,
    },
    missionType: {
        type: DataTypes.INTEGER,
        references: {
          model: 'missionType',
          key: 'id',
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'activityType',
  }
);

export default ActivityType;
//module.exports = { ActivityType };
