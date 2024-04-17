import { gql } from "@apollo/client";
export const LEADER_BOARD = gql`
  query LeaderBoard {
    leaderBoard {
      id
      name
      score
      image
      subtitle
    }
  }
`;
