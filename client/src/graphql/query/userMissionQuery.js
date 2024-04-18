import { gql } from "@apollo/client";

export const GET_USER_MISSION = gql`
  query getAllCurrentMissions {
    getAllCurrentMissions {
      id
      name
      type
      userId
      points
      isComplete
    }
  }
`;

export const GET_USER_MISSION_BY_MISSION_ID = gql`
  query getCurrentMissionByMissionId($missionId: Int) {
    getCurrentMissionByMissionId(missionId: $missionId) {
      id
      name
      type
      points
      isComplete
      timer
      userId
    }
  }
`;

export const GET_USER_MISSION_ACTIVITIES = gql`
  query getCurrentMissionActivities($missionId: Int) {
    getCurrentMissionActivities(missionId: $missionId) {
      id
      name
      description
      image
      isComplete
      missionTypeId
    }
  }
`;
