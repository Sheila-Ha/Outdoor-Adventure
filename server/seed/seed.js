import sequelize from "../config/connection.js";
import { User } from "../models/index.js";

(async function syncSequelize() {
  await sequelize.sync({ force: true });
  await User.create({
    username: "salidam",
    email: "email@email.com",
    password: "password",
    firstName: "Salida",
    lastName: "M",
  });
  console.log("user data seeded");
})();
