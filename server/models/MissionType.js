import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class MissionType extends Model {}

MissionType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    missionTypeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    missionTypeDescription: {
      type: DataTypes.STRING,
    },
    missionTypeImage: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "missionType",
  }
);

export default MissionType;
