import { gql } from "@apollo/client";

export const GET_CURRENT_MISSION = gql`
  query GetCurrentMission {
    getCurrentMission {
      _id
      timer
      userId
      name
    }
  }
`;