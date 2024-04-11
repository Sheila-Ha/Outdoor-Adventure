import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class CurrentMissionActivities extends Model {}

CurrentMissionActivities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    missionActivityComplete: {
      type: DataTypes.BOOLEAN,
    },
    currentMissionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "currentModel",
        key: "id",
        unique: false,
      },
    },
    activityTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "activityType",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "currentMissionActivities",
  }
);
export { CurrentMissionActivities };
