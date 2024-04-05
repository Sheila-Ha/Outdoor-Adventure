import dotenv from 'dotenv';
dotenv.config();
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres' 
});

export default sequelize;