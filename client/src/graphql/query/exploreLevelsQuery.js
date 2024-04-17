import { gql } from "@apollo/client";

export const GET_EXPLORE_LEVELS = gql`
  query getAllExploreLevels {
    getAllExploreLevels {
      _id
      name
      pointsRequired
    }
  }
`;