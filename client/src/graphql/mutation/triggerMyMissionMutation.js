import { gql } from '@apollo/client';

// Define the TRIGGER_MY_MISSION mutation
export const TRIGGER_MY_MISSION = gql`
  mutation triggerMyMission($userId: ID!, $missionType: String!) {
    triggerMyMission(userId: $userId, missionType: $missionType)
  }
`;