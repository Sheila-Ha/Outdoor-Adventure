import { gql } from "@apollo/client";

export const GET_CURRENT_MISSION = gql`
  query GetCurrentMission {
    getCurrentMission {
      id
      timer
      userId
    }
  }
`;