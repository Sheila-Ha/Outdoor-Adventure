import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { where } from "sequelize";

// Define the resolver object for the changePassword mutation
export const ChangePasswordMutation = {
  // Define the changePassword resolver
  async changePassword(_, { currentPassword, newPassword }, req) {
    console.log(req.userInfo.id, "userid");
    //
    const user = await User.findOne({ where: { id: req.userInfo.id } });
    if (!user) {
      throw new Error("User not found");
    }
    // compare the current password with the one stored in the database
    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) {
      throw new Error("Incorrect current password");
    }
    // hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // update the user's password
    await user.update(
      { password: hashedPassword },
      { where: { id: req.userInfo.id } }
    );
    return "Password changed successfully";
  },
};
