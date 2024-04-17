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

export const GET_ALL_CURRENT_MISSIONS = gql`
  query GetAllCurrentMissions{
    getAllCurrentMissions {
      id
      name
      type
      points
      isComplete
      timer
    }
  }
`;