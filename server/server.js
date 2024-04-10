import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { resolvers, typeDefs } from "./schemas/index.js";
import { authMiddleware } from "../server/utils/api/auth.js";
import  sequelize  from "./config/connection.js";

const app = express();
const port = 3000;
const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function startApolloServer() {
  await sequelize.sync({force: false});
  console.log("All models were synchronized successfully.");

  await server.start();
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Use GraphQL at http://localhost:${port}/graphql`);
  });
}

startApolloServer();
