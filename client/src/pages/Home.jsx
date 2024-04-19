import { useState, useEffect } from "react";
// import TriggerMyMission from "../components/TriggerMyMission.jsx";
import FunFact from "../components/FunFact.jsx";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard.jsx";
import MissionCard from "../components/MissionCard.jsx";

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
			title: "Fitness Mission",
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

	const [dailyTimeLeft, setDailyTimeLeft] = useState(86400); // 24 hours in seconds
	const [weeklyTimeLeft, setWeeklyTimeLeft] = useState(604800); // 7 days in seconds

	// Update daily timer every second
	useEffect(() => {
		const intervalId = setInterval(() => {
			setDailyTimeLeft(dailyTimeLeft - 1);

			if (dailyTimeLeft === 0) {
				// Reset daily timer
				setDailyTimeLeft(86400);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [dailyTimeLeft]);

	// Update weekly timer every second
	useEffect(() => {
		const intervalId = setInterval(() => {
			setWeeklyTimeLeft(weeklyTimeLeft - 1);

			if (weeklyTimeLeft === 0) {
				// Reset weekly timer
				setWeeklyTimeLeft(604800);
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [weeklyTimeLeft]);

	// Format weekly timer
	const formattedWeeklyTimeLeft =
		Math.floor(weeklyTimeLeft / 86400) +
		"d " +
		Math.floor((weeklyTimeLeft % 86400) / 3600) +
		"h " +
		Math.floor((weeklyTimeLeft % 3600) / 60) +
		"m " +
		(weeklyTimeLeft % 60) +
		"s";

	// Format daily timer
	const formattedDailyTimeLeft =
		Math.floor(dailyTimeLeft / 3600) +
		":" +
		Math.floor((dailyTimeLeft % 3600) / 60) +
		":" +
		(dailyTimeLeft % 60);

	return (
		<div className="flex flex-col h-screen gap-4 p-4">
			<FunFact />
			<LeaderBoard />

			<div className="flex justify-between">
				<h2 className="text-lg font-bold">
					Weekly Mission{" "}
					<span className="self-center text-sm italic text-gray-400">
						500xp
					</span>
				</h2>

				<div className="text-center">
					<h2>Time Remaining: {formattedWeeklyTimeLeft}</h2>
				</div>
			</div>

			<MissionCard
				title={missions.weeklyMission.title}
				description={missions.weeklyMission.description}
				categoryColor={missionCategoryColors[missions.weeklyMission.category]}
			/>

			<div className="overflow-y-auto">
				<div className="flex justify-between">
					<h2 className="text-lg font-bold">
						Daily Missions{" "}
						<span className="self-center text-sm italic text-gray-400">
							100xp
						</span>
					</h2>

					<h2 className="self-center">
						Time Remaining: {formattedDailyTimeLeft}
					</h2>
				</div>

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

			{/* <div>
        <TriggerMyMission />
      </div> */}
		</div>
	);
};

export default Home;
