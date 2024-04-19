import { gql } from '@apollo/client';

export const UPDATE_USER_LEVEL = gql`
  mutation updateUserLevel($id: ID, $exploreLevelId: String) {
    updateUserLevel(id: $id, exploreLevelId: $exploreLevelId) {
      id
      password
    }
  }
`;
