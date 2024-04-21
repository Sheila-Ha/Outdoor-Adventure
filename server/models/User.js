import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config/connection.js";

class User extends Model {
  checkPassword(loginPw) {
    // compare the login password with the hashed password stored in the database
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // define a email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // define a password column
    image: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    // define a currentLeaderBoardLevel column
    currentLeaderBoardLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastLogin: {
      type: DataTypes.DATE,
    },
    memberSince: {
      type: DataTypes.DATE,
    },
    exploreLevelId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "explore_level",
        key: "id",
      },
    },
    // define a currentNumExpPoints column
    currentNumExpPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    //  define hooks for the User model
    hooks: {
      beforeCreate: async (newUserData) => {
        // hash the new user's password
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

export { User };
