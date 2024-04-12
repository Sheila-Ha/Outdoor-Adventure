import { useState } from "react";

const LeaderboardRow = ({ rank, name, score }) => {
  // Determine the color based on the rank
  const color =
    rank === 1 ? "bg-yellow-400" :
    rank === 2 ? "bg-gray-300" :
    rank === 3 ? "bg-orange-300" :
    "bg-white";

  // Determine additional styles for the medal winners
  const textStyle =
    rank <= 3 ? "text-xl font-bold" : "font-medium";

  return (
    <tr className={`${color}`}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        #{rank}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className={`text-sm ${textStyle} px-6 py-4 whitespace-nowrap`}>
        {score}
      </td>
    </tr>
  );
};

const Home = () => {
  const [missions] = useState({
    dailyMissions: [
      { id: 1, title: "Daily Mission 1", description: "Complete a 5k run." },
      { id: 2, title: "Daily Mission 2", description: "Bike for 30 minutes." },
      { id: 3, title: "Daily Mission 3", description: "Hike any local trail." },
    ],
    weeklyMission: {
      id: 1,
      title: "Weekly Mission",
      description: "Climb a total of 1000 meters elevation.",
    },
  });

  const leaderboardData = [
    { id: 1, name: "JanePHD92", score: 1250 },
    { id: 2, name: "BobbyB0y11", score: 950 },
    { id: 3, name: "Mary1968", score: 800 },
    { id: 4, name: "HollyB518", score: 625 },
	{ id: 5, name: "MarkM93", score: 540 },
	{ id: 6, name: "NatureFr3Ak63", score: 480 },
	{ id: 7, name: "Woodstock87", score: 320 },
	{ id: 8, name: "VenusG22", score: 300 },
	{ id: 9, name: "IFoundRocks66", score: 280 },
	{ id: 10, name: "ShadowWar04", score: 210 },
  ];

	return (
		<div className="p-4">
		<h2 className="text-lg font-bold mb-2">Daily Leaderboard</h2>
		<div className="max-h-96 overflow-y-auto">
		<table className="min-w-full divide-y divide-gray-200">
			<tbody>
			{leaderboardData.map((user, index) => (
				<LeaderboardRow
				key={user.id}
				rank={index + 1}
				name={user.name}
				score={user.score}
				/>
			))}
			</tbody>
		</table>
		</div>

      <h2 className="text-lg font-bold mb-2 mt-8">Weekly Mission</h2>
      <div key={missions.weeklyMission.id} className="border p-4 mb-4">
        <h3 className="text-md font-semibold">
          {missions.weeklyMission.title}
        </h3>
        <p>{missions.weeklyMission.description}</p>
      </div>

      <h2 className="text-lg font-bold mb-2">Daily Missions</h2>
      {missions.dailyMissions.map((mission) => (
        <div key={mission.id} className="border p-4 mb-2">
          <h3 className="text-md font-semibold">{mission.title}</h3>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;