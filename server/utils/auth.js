import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export function authMiddleware({ req }) {
  // let token = req.headers.authorization;
  // if (req.headers.authorization) {
  //   token = token.split(" ").pop().trim();
  // }
  // if (!token) {
  //   return req;
  // }
  // try {
  //   const  data = jwt.verify(token, process.env.SECRET_KEY, {
  //     maxAge: 60 * 60 * 2,
  //   });
  //   console.log(data);
  //  req.userInfo = data.userInfo; 
  // } catch {
  //   console.log("Invalid token");
  // }

  return req;
}
