import { gql } from '@apollo/client';

// Define the TRIGGER_MY_MISSION mutation
export const TRIGGER_MY_MISSION = gql`
  mutation triggerMyMission($userId: ID!, $city: String!, $state: String!, $missionType: String!, $missionId: Int!) {
    triggerMyMission(userId: $userId, city: $city, state: $state, missionType: $missionType, missionId: $missionId)
  }
`;