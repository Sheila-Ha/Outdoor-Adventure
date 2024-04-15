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
      lastLogin
      memberSince
      exploreLevelId
    }
  }
`;
export const QUERY_ALL_MISSIONS = gql`
  query getAllCurrentMissions() {
    getAllCurrentMissions() {
      _id
      name
      type
      points
      isComplete
      timer
      userId
      missionTypeId
    }
  }
`;
export const QUERY_All_Explore_Levels = gql`
  query getAllExploreLevels() {
    getAllExploreLevels() {
      _id
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
      _id
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
      _id
      name
      description
      image
      missionTypeId
    }
  }
`;
export const QUERY_ALL_MISSION_ACTIVITIES = gql`
  query getAllMissionActivities() {
    getAllMissionActivities() {
      _id
      complete
      missionId
      activityId
    }
  }
`;