import { useState } from "react";

const LeaderboardRow = ({ rank, name, score }) => {
  const color =
    rank === 1 ? "bg-yellow-400" :
    rank === 2 ? "bg-gray-300" :
    rank === 3 ? "bg-orange-300" :
    "bg-white";
  const textStyle =
    rank <= 3 ? "text-xl font-bold" : "font-medium";

  return (
    <tr className={`${color} text-gray-900`}>
      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
        #{rank}
      </td>
      <td className="text-sm font-light px-3 py-2 whitespace-nowrap">
        {name}
      </td>
      <td className={`text-sm ${textStyle} px-3 py-2 whitespace-nowrap`}>
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

//   TODO: Update with real data
  const leaderboardData = [
    { id: 1, name: "JanePHD92", score: '1,250' },
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

//   TODO: Update with a trivia API or something
  const trivia = [
	"A group of flamingos is called a flamboyance.",
	"The Amazon rainforest produces 20% of the world's oxygen.",
	"The world's tallest tree is a coast redwood measuring 115.55 meters (379.1 feet).",
	"There are over 3 trillion trees on Earth.",
	"Fungi play a crucial role in the health of forests by breaking down dead organic matter.",
	"Soil contains more microorganisms than there are people on Earth.",
	"Up to 30 million species of insects live in the world's tropical forests.",
	"Forests remove about one-third of human-caused emissions of carbon dioxide from the atmosphere each year.",
	"Old growth forests can continue accumulating carbon for hundreds of years.",
	"Mangrove forests protect coastlines from erosion and provide nursery habitat for young fish.",
	"Coral reefs support 25% of all marine life with less than 1% of the ocean's surface area.",
	"Kelp forests absorb massive amounts of carbon dioxide from the atmosphere.",
	"The Amazon River carries about 20% of the world's flowing freshwater.",
	"Wetlands act as natural water filters by absorbing pollutants.",
	"Peat bogs store more carbon per square meter than any other ecosystem.",
	"Grasslands sequester carbon in their deep root systems and soil organic matter.",
	"Permafrost soils contain huge amounts of frozen organic matter and methane.",
	"Up to 80% of Earth's oxygen comes from phytoplankton in the oceans.",
	"Whales help fertilize the oceans by releasing iron-rich fecal plumes.",
	"Sea otters play a key role in kelp forest health by preying on sea urchins.",
	"Beavers create wetlands that support high levels of biodiversity.",
	"Dragonflies are important predators that help regulate mosquito populations.",
    
  ];

  const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="p-2 text-center bg-green-300">
        <p className="text-sm">{randomTrivia}</p>
      </div>

      <div className="overflow-y-auto" style={{ height: '25vh' }}>
        <h2 className="text-lg font-bold p-2">Daily Leaderboard</h2>
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

      <div className="flex-none p-4" style={{ height: '15vh' }}>
        <h2 className="text-lg font-bold">Weekly Mission</h2>
        <div className="h-full overflow-y-auto">
          <div className="border p-4">
            <h3 className="text-md font-semibold">{missions.weeklyMission.title}</h3>
            <p>{missions.weeklyMission.description}</p>
          </div>
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-lg font-bold">Daily Missions</h2>
        <div className="space-y-2">
          {missions.dailyMissions.map((mission) => (
            <div key={mission.id} className="border p-4">
              <h3 className="text-md font-semibold">{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;