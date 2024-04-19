import { useQuery } from "@apollo/client";
import { GET_USER_PROFILE_INFO } from "../graphql/query";

export default function Profile() {
  const { loading, data, error } = useQuery(GET_USER_PROFILE_INFO);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {error.message}
      </div>
    );

  // Temporary hard-coded data. TODO: Replace with actual user data
  const user = {
    // 	id: 1,
    // 	name: "OliveLoaf23",
    // 	level: 8,
    // 	avatar: "https://picsum.photos/200",
    badges: ["Newcomer 👋", "Adventurer 🌄", "Explorer 🔭"],
    bio: "Lover of nature and all things outdoors.",
    // 	joinDate: "2021-04-22",
    // 	missionsCompleted: 236,
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col items-center">
          {/* <button className="self-end px-3 py-1 mt-0 text-white bg-gray-400 rounded-md">
            Edit Profile
          </button> */}
          <div className="relative">
            <img
              className="w-32 h-32 mb-4 rounded-full"
              src={
                data.getUserProfileInfo.imageUrl ||
                "https://github.com/shadcn.png"
              }
              alt={`${data.getUserProfileInfo.imageUrl}'s avatar`}
            />
            {/* Can later update this to reflect status */}
            <span className="absolute block w-6 h-6 bg-green-400 rounded-full bottom-6 right-3 ring-2 ring-white"></span>
          </div>

          {/* Added exp bar */}
          <div className="h-4 bg-gray-200 rounded-full w-80 dark:bg-gray-700">
            <div
              className="flex items-center justify-center h-4 px-2 text-xs font-bold text-white bg-purple-500 rounded-full"
              style={{ width: "60%" }}
            >
              {data.getUserProfileInfo.totalPoints}/5000px
            </div>
          </div>

          <h1 className="mb-1 text-2xl font-bold">
            {data.getUserProfileInfo.username}
          </h1>
          <div className="mb-4 text-center">
            {/* <p className="font-medium text-gray-700">Level: {user.level}</p> */}
            <p className="text-sm text-gray-500">
              Joined: {data.getUserProfileInfo.memberSince}
            </p>
            <p className="text-sm text-gray-500">
              Missions Completed:{" "}
              {data.getUserProfileInfo.numberOfMissionCompleted}
            </p>
          </div>
          <div className="w-full">
            <h2 className="w-full text-lg font-bold text-left">Badges</h2>
            <div className="flex flex-wrap justify-start">
              {user.badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 m-1 text-sm font-semibold bg-purple-200 rounded-full shadow-md"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full p-4 mt-4 bg-blue-100 rounded-lg shadow-inner">
            <h2 className="mb-2 text-lg font-bold">Bio</h2>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 external-links">
        <a
          href="https://www.audubon.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          Audubon
        </a>
        <a
          href="https://ebird.org/home"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          eBird
        </a>
        <a
          href="https://www.fws.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          U.S. Fish and Wildlife Service
        </a>
        <a
          href="https://astronomy.tools/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          Astronomy Tools
        </a>
        <a
          href="https://www.nps.gov/index.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          National Park Service
        </a>
        <a
          href="https://www.alltrails.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          All Trails
        </a>
        <a
          href="https://www.geocaching.com/play"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          Geocaching
        </a>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-purple-700 whitespace-no-wrap hover:text-purple-950"
        >
          Google Maps
        </a>
        
      </div>
    </div>
  );
}
