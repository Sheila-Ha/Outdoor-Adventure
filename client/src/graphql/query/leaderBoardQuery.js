import { gql } from "@apollo/client";
export const LEADER_BOARD = gql`
  query LeaderBoard($isWeekly: Boolean) {
    leaderBoard(isWeekly: $isWeekly) {
      id
      name
      score
      image
      subtitle
    }
  }
`;
