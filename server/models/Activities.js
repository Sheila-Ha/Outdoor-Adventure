import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Activities extends Model {}

Activities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING,
    },
    missionTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "mission_types",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "activities",
  }
);

export { Activities };
