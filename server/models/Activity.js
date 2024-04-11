import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activityName: {
      type: DataTypes.STRING,
    },
    activityDescription: {
      type: DataTypes.STRING,
    },
    activityImage: {
      type: DataTypes.STRING,
    },
    missionType: {
        type: DataTypes.INTEGER,
        references: {
          model: 'missionActivity',
          key: 'id',
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);

export default Activity;
