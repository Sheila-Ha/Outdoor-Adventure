import LeaderBoardRow from "./LeaderBoardRow";
import { LEADER_BOARD } from "../../graphql/query/index.js";
import { useQuery } from "@apollo/client";

export default function LeaderBoard() {
	const { loading, error, data } = useQuery(LEADER_BOARD);
	if (error) return <p>Error: {error.message}</p>;
	if (loading) return <p>Loading...</p>;

	return (
		<>
			<div className="flex items-center justify-between mb-4">
				<div className="text-lg font-bold">Leaderboard</div>

				<div className="flex">
					<button className="px-4 py-2 font-bold text-gray-500 bg-white rounded-l-lg">
						Weekly
					</button>
					<button className="px-4 py-2 font-bold text-white bg-gray-500 rounded-r-lg">
						All-time
					</button>
				</div>
			</div>

			<div className="overflow-y-auto h-[25vh]">
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
