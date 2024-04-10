import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class MissionActivity extends Model {}

MissionActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    missionType: {
      type: DataTypes.INTEGER,
      references: {
        model: "activity",
        key: "id",
      },
    },
    activityType: {
      type: DataTypes.INTEGER,
      references: {
        model: "mission",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "missionActivity",
  }
);

module.exports = MissionActivity;
