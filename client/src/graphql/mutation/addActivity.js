import { gql } from '@apollo/client';

export const ADD_ACTIVITY = gql`
  mutation addActivity($name: String, $description: String, $missionTypeId: Int) {
    addActivity(name: $name, description: $description, missionTypeId: $missionTypeId) {
      id
      name
      description
      missionTypeId
    }
  }
`;