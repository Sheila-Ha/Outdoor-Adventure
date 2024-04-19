import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query findUsers() {
    findUsers() {
      _id
      username
      email
      currentLeaderBoardLevel
      firstName
      lastName
      city
      state
      lastLogin
      memberSince
      exploreLevelId
      currentNumExpPoints
    }
  }
`;
export const QUERY_All_EXPLORE_LEVELS = gql`
  query getAllExploreLevels() {
    getAllExploreLevels() {
      id
      name
      pointsRequired
      badge
      sort
    }
  }
`;
export const QUERY_MISSION_TYPES = gql`
  query getAllMissionTypes() {
    getAllMissionTypes() {
      id
      name
      description
      image
      point_value
    }
  }
`;
export const QUERY_ACTIVITIES = gql`
  query getAllActivities() {
    getAllActivities() {
      id
      name
      description
      image
      isComplete
      missionTypeId
    }
  }
`;
export const QUERY_ALL_MISSION_ACTIVITIES = gql`
  query getAllMissionActivities() {
    getAllMissionActivities() {
      id
      missionId
      activityId
    }
  }
`;