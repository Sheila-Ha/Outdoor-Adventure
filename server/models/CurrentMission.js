import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class CurrentMission extends Model {}

CurrentMission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activities: {
      type: [],
    },
    missionName: {
      type: DataTypes.STRING,
    },
    missionTypeId: {
      type: DataTypes.INTEGER,
    },
    timer: {
      type: DataTypes.INTEGER,
    },
    // This column will store a reference of the `id` of the `User` that has this ExploreLevel
    userId: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `user` model, which we set in `User.js` as its `modelName` property
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "currentMission",
  }
);

export { CurrentMission };
