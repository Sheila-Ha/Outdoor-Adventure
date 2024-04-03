import { gql } from "@apollo/client";

export const FIND_USERS = gql`
  query FindUsers {
    findUsers {
      id
      name
      interest
    }
  }
`;