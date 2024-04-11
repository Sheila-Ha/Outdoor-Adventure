import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/User.js";

import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { generateUsername } from "unique-username-generator";

function generateToken(user) {
  const userInfo = {
    id: user.id,
    email: user.email,
    lastLogin: user.lastLogin,
    memberSince: user.memberSince,
  };

  const token = jwt.sign({ userInfo: userInfo }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 2,
  });
  return token;
}

export const LogInSignUpMutation = {
  async login(parent, { email, password }, req) {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    if (!user.checkPassword(password)) {
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    const token = generateToken(user);
    return token;
  },
  async signUp(parent, { signUpDetails }, req) {
    const newUser = await User.create({
      username: generateUsername(),
      email: signUpDetails.email,
      password: signUpDetails.password,
      firstName: signUpDetails.firstName,
      lastName: signUpDetails.lastName,
      lastLogin: Date.now(),
      memberSince: Date.now(),
    });
    const token = generateToken(newUser);
    return token;
  },
};
