import { gql } from '@apollo/client';

export const UPDATE_USER_LEVEL = gql`
  mutation updateUserLevel($id: ID, $exploreLevelId: Int) {
    updateUserLevel(id: $id, exploreLevelId: $exploreLevelId) {
      id
      exploreLevelId
    }
  }
`;

export const UPDATE_USER_POINTS = gql`
mutation updateUserPoints($id: ID, $currentNumExpPoints: Int) {
  updateUserPoints(id: $id, currentNumExpPoints: $currentNumExpPoints) {
    id
    currentNumExpPoints
  }
}
`;
