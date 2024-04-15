import LeaderBoardRow from "./LeaderBoardRow";
import { LEADER_BOARD } from "../../graphql/query/index.js";
import { useQuery } from "@apollo/client";

export default function LeaderBoard() {
  const {loading, error, data} = useQuery(LEADER_BOARD);
  if (error) return <p>Error: {error.message}</p>
  if(loading) return <p>Loading...</p>
  return (
    <>
      <div className="overflow-y-auto h-[30vh]">
        <div className="flex">
          <div className="text-lg font-bold pt-4">Daily Leaderboard</div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            {data.leaderBoard.map((user, index) => (
              <LeaderBoardRow
                key={user.id}
                rank={index + 1}
                name={user.name}
                score={user.score}
                image={user.image}
                subtitle={user.subtitle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
