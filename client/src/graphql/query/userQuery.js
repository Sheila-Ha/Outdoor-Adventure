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
      currentNumExpPoints
    }
  }
`;

export const GET_USER_PROFILE_INFO = gql`
  query GetUserProfileInfo {
    getUserProfileInfo {
      id
      imageUrl
      username
      memberSince
      numberOfMissionCompleted
      totalPoints
    }
  }
`;
