import { gql } from "@apollo/client";

export const FIND_USERS = gql`
  query FindUsers {
    findUsers {
      id
      username
      email
      firstName
      lastName
      lastLogin
      memberSince
      exploreLevelId
      name
      interest
    }
  }
`;