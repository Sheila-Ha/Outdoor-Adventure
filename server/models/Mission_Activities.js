import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Mission_Activities extends Model {}

Mission_Activities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    missionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "current_mission",
        key: "id",
        unique: false,
      },
    },
    activityId: {
      type: DataTypes.INTEGER,
      references: {
        model: "activities",
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
    modelName: "mission_activities",
  }
);
export { Mission_Activities };
