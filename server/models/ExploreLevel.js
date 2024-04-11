import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class ExploreLevel extends Model {}

ExploreLevel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    levelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    levelRequirement: {
      type: DataTypes.INTEGER,
    },
    levelBadge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exploreLevel',
  }
);

export default ExploreLevel;
