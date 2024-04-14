import { useState } from "react";
import TriggerMyMission from "../components/APIs/TriggerMyMission.jsx";
import FunFact from "../components/FunFact.jsx";
const LeaderboardRow = ({ rank, name, score, image, subtitle }) => {
  const rowColor =
    rank === 1
      ? "bg-yellow-400"
      : rank === 2
      ? "bg-gray-300"
      : rank === 3
      ? "bg-orange-300"
      : "bg-white";

  const textStyle = rank <= 3 ? "text-xl font-bold" : "font-medium";

  const scoreStyle =
    rank <= 3 ? "text-lg font-extrabold text-yellow-600" : "text-lg font-light";

  return (
    <tr className={`${rowColor} text-gray-900`}>
      <td className="flex items-center px-3 py-2 text-sm font-medium whitespace-nowrap">
        <span className={`mr-2 ${textStyle}`}>#{rank}</span>
        <img
          className="w-10 h-10 rounded-full"
          src={image}
          alt={`Profile of ${name}`}
        />
        <div className="ml-4">
          <div className={textStyle}>{name}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </td>
      <td className={`${scoreStyle} px-3 py-2 whitespace-nowrap`}>{score}</td>
    </tr>
  );
};

const MissionCard = ({ title, description, categoryColor }) => {
  return (
    <div className="relative p-4 mb-2 border">
      <span
        className={`absolute top-0 left-0 h-1 w-full ${categoryColor}`}
      ></span>{" "}
      {/* Colored bar */}
      <h3 className="font-semibold text-md">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Home = () => {
  const [missions] = useState({
    dailyMissions: [
      {
        id: 1,
        title: "Astrology Mission",
        description: "Read your daily horoscope.",
        category: "astrology",
      },
      {
        id: 2,
        title: "Fitness Mission",
        description: "Bike for 30 minutes.",
        category: "fitness",
      },
      {
        id: 3,
        title: "Exploration Mission",
        description: "Hike any local trail.",
        category: "exploration",
      },
    ],
    weeklyMission: {
      id: 1,
      title: "Weekly Mission",
      description: "Climb a total of 1000 meters elevation.",
      category: "gold",
    },
  });

  const missionCategoryColors = {
    fitness: "bg-blue-500",
    exploration: "bg-green-500",
    astrology: "bg-purple-500",
    gold: "bg-yellow-400",
  };

  //   TODO: Update with real data
  const [leaderboardData] = useState([
    {
      id: 1,
      name: "JanePHD92",
      score: "1,250",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      subtitle: "Elk",
    },
    {
      id: 2,
      name: "BobbyB0y11",
      score: 950,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      subtitle: "Squirrel",
    },
    {
      id: 3,
      name: "Mary1968",
      score: 800,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      subtitle: "Lion",
    },
    {
      id: 4,
      name: "HollyB518",
      score: 750,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      subtitle: "Squirrel",
    },
    {
      id: 5,
      name: "MarkM93",
      score: 700,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      subtitle: "Zebra",
    },
    {
      id: 6,
      name: "NatureFr3Ak63",
      score: 650,
      image: "https://randomuser.me/api/portraits/women/49.jpg",
      subtitle: "Red Fox",
    },
    {
      id: 7,
      name: "Woodstock87",
      score: 600,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      subtitle: "Mouse",
    },
    {
      id: 8,
      name: "VenusG22",
      score: 550,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      subtitle: "Pig",
    },
    {
      id: 9,
      name: "IFoundRocks66",
      score: 500,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      subtitle: "Mouse",
    },
    {
      id: 10,
      name: "ShadowWar04",
      score: 450,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      subtitle: "Tortoise",
    },
  ]);

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
      {/* <div className="p-2 text-center bg-green-300">
        <p className="text-sm">{randomTrivia}</p>
      </div> */}

      <div className="overflow-y-auto" style={{ height: "30vh" }}>
        <h2 className="p-2 text-lg font-bold">Daily Leaderboard</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            {leaderboardData.map((user, index) => (
              <LeaderboardRow
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

      <div className="p-4" style={{ height: "15vh" }}>
        <MissionCard
          title={missions.weeklyMission.title}
          description={missions.weeklyMission.description}
          categoryColor={missionCategoryColors[missions.weeklyMission.category]}
        />
      </div>

      <div
        className="p-4 overflow-y-auto"
        style={{ height: "calc(45vh - 4rem)" }}
      >
        <h2 className="text-lg font-bold">Daily Missions</h2>
        <div className="space-y-2">
          {missions.dailyMissions.map((mission) => (
            <MissionCard
              key={mission.id}
              title={mission.title}
              description={mission.description}
              categoryColor={missionCategoryColors[mission.category]}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <TriggerMyMission />
      </div>
    </div>
  );
};

export default Home;
