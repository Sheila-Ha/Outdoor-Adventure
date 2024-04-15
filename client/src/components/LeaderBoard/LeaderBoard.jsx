import { useState } from "react";
import LeaderBoardRow from "./LeaderBoardRow";

export default function LeaderBoard() {
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
    return <>
    <div className="overflow-y-auto" style={{ height: "30vh" }}>
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