import { useQuery } from "@apollo/client";
import { FIND_USERS } from "../graphql/query";

export default function Profile() {
	const { loading, error} = useQuery(FIND_USERS);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	const user = {
		id: 1,
		name: "OliveLoaf23",
		level: 8,
		avatar: "https://picsum.photos/2006",
		badges: ["Newcomer 👋", "Adventurer 🌄", "Explorer 🔭"],
		bio: "Lover of nature and all things outdoors.",
		joinDate: "2021-04-22",
		missionsCompleted: 236,
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
			<div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md">
				<div className="flex flex-col items-center">
					<img
						className="w-24 h-24 rounded-full mb-4"
						src={user.avatar}
						alt={`${user.name}'s avatar`}
					/>
					<h1 className="text-2xl font-bold mb-2">{user.name}</h1>
					<p className="text-gray-600">Level: {user.level}</p>
					<p className="text-gray-600">Joined: {user.joinDate}</p>
					<p className="text-gray-600">
						Missions Completed: {user.missionsCompleted}
					</p>
					<div className="mt-4">
						<h2 className="text-lg font-bold">Badges</h2>
						<div className="flex">
							{user.badges.map((badge, index) => (
								<span
									key={index}
									className="bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 shadow-md"
								>
									{badge}
								</span>
							))}
						</div>
					</div>
					<div className="mt-4 bg-blue-100 p-4 rounded-lg">
						<h2 className="text-lg font-bold mb-2">Bio</h2>
						<p>{user.bio}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
