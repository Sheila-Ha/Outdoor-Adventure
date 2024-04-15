import LeaderBoardRow from "./LeaderBoardRow";

export default function LeaderBoard() {
  
    return <>
    <div className="overflow-y-auto h-[30vh]">
        <div className="flex">
          <div className="text-lg font-bold pt-4">Daily Leaderboard</div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            {leaderboardData.map((user, index) => (
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
}