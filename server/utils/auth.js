import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export function authMiddleware({ req }) {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.headers.authorization;
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }
  if (!token) {
    return req;
  }
  try {
    // decode and attach user data to request object
    const data = jwt.verify(token, process.env.SECRET_KEY, {
      // 2 hour expiration
      maxAge: 60 * 60 * 2,
    });
    // console.log(data);
    req.userInfo = data.userInfo;
  } catch {
    console.log("Invalid token");
  }

  return req;
}
