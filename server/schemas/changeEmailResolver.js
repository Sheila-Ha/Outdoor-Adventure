import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const ChangeEmailMutation = {
  //  resolver function for changeEmail mutation
  async changeEmail(_, { newEmail }, req) {
    // check if user is logged in
    const user = await User.findOne({ where: { id: req.userInfo.id } });
    // if user is not found, throw an error
    if (!user) {
      throw new Error("User not found");
    }
    // if the new email is not valid, throw an error
    if (!isValidEmail(newEmail)) {
      throw new Error("Invalid email format.");
    }
    // update the user's email
    await user.update({ email: newEmail });

    return "Email updated successfully";
  },
};

function isValidEmail(email) {
  return email.includes("@");
}
