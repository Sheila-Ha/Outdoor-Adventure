import { gql } from "@apollo/client";

export const GET_USER_MISSION = gql`
  query getAllCurrentMissions($userId: Int) {
    getAllCurrentMissions(userId: $userId) {
      id
      name
      type
      userId
    }
  }
`;
