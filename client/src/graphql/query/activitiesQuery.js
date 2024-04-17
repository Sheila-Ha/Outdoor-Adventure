import { gql } from "@apollo/client";

export const GET_ACTIVITIES = gql`
  query getAllActivities {
    getAllActivities {
      id
      name
      description
      missionTypeId
    }
  }
`;