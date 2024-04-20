import { gql } from "@apollo/client";

export const GET_EXPLORE_LEVELS = gql`
  query getAllExploreLevels {
    getAllExploreLevels {
      id
      name
      pointsRequired
    }
  }
`;

export const GET_EXPLORE_LEVEL_POINTS = gql`
query getUserExploreLevel($id: ID) {
  getUserExploreLevel(id: $id) {
    id
    point_value
  }
}`
