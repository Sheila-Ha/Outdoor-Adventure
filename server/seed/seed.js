import sequelize from "../config/connection.js";
import User from "../models/User.js";

(async function syncSequelize() {
  await sequelize.sync({ force: true });
  await User.create({
    username: "salidam",
    email: "email@email.com",
    password: "password",
    currentExploreLevel: 1,
    firstName: "Salida",
    lastName: "M"
  });
  console.log("user data seeded");
})();
