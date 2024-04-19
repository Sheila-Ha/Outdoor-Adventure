// Import the User model
import dotenv from "dotenv";
dotenv.config();
import { User } from "../models/User.js";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { generateUsername } from "unique-username-generator";

// Generate a token
function generateToken(user) {
  // Define the user information
  const userInfo = {
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    city: user.city,
    state: user.state,
    image: user.image,
    email: user.email,
    lastLogin: user.lastLogin,
    memberSince: user.memberSince,
  };
  // Generate a token
  const token = jwt.sign({ userInfo: userInfo }, process.env.SECRET_KEY, {
    // Set the token to expire in 2 hours
    expiresIn: 60 * 60 * 2,
    // expiresIn: 5,
  });
  return token;
}
// Define the LogInSignUpMutation
export const LogInSignUpMutation = {
  // Define the login resolver
  async login(parent, { email, password }, req) {
    const user = await User.findOne({ where: { email: email } });
    //  Check if the user exists
    if (!user) {
      // Throw an error if the user does not exist
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    //  Check if the password is correct
    if (!user.checkPassword(password)) {
      // Throw an error if the password is incorrect
      throw new GraphQLError("You are not authorized to perform this action.", {
        extensions: {
          code: "FORBIDDEN",
        },
      });
    }
    //  Update the last login time
    const token = generateToken(user);
    return token;
  },
  // Define the signUp resolver
  async signUp(parent, { signUpDetails }, req) {
    //  Create a new user
    const newUser = await User.create({
      username: generateUsername(),
      email: signUpDetails.email,
      password: signUpDetails.password,
      firstName: signUpDetails.firstName,
      lastName: signUpDetails.lastName,
      city: signUpDetails.city,
      state: signUpDetails.state,
      lastLogin: Date.now(),
      memberSince: Date.now(),
    });
    //  Generate a token
    const token = generateToken(newUser);
    return token;
  },
};
