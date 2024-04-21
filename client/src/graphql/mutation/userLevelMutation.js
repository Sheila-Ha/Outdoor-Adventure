import { gql } from '@apollo/client';

export const UPDATE_USER_LEVEL = gql`
  mutation updateUserLevel($id: ID, $exploreLevelId: String) {
    updateUserLevel(id: $id, exploreLevelId: $exploreLevelId) {
      id
      exploreLevelId
    }
  }
`;

export const UPDATE_USER_POINTS = gql`
  mutation updateUserLevel($id: ID, $currentNumExpPoints: String) {
    updateUserLevel(id: $id, currentNumExpPoints: $currentNumExpPoints) {
      id
      currentNumExpPoints
    }
  }
`;
