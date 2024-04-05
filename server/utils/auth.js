import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export function authMiddleware({ req }) {
  let token = req.headers.authorization;
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }
  console.log(token);
  if (!token) {
    return req;
  }
  try {
    const  data = jwt.verify(token, process.env.SECRET_KEY, {
      maxAge: 60 * 60 * 2,
    });
    console.log(data);
   req.user = data; 
  } catch {
    console.log("Invalid token");
  }

  return req;
}
