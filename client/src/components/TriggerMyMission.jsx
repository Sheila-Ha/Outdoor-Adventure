import { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useLoggedInUser } from "../context/UserContext.jsx";
import {
  MISSION_TYPES,
  GET_USER_MISSION,
  GET_USER_MISSION_ACTIVITIES,
} from "../graphql/query/index.js";
import { TRIGGER_MY_MISSION } from "../graphql/mutation/triggerMyMissionMutation.js";
import MissionCard from "./MissionCard.jsx";

// Define your mutation
function TriggerMyMission() {
  // Set up state variables to store the selected value and text
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedText, setSelectedText] = useState("");
  // Set up state variables to store the current missions which allows the grid to automatically update after a mission is triggered
  const [currentMissions, setCurrentMissions] = useState("");

  // Get all current missions for the user
  // Refetch gets the data again after the mutation (inserts) are completed
  const { loading, data, refetch } = useQuery(GET_USER_MISSION);
  useEffect(() => {
    if (!loading && data) {
      setCurrentMissions(data.getAllCurrentMissions);
    }
  }, [loading, data]);

  // Get all the activities for each mission so they can be counted and displayed on the Mission Card
  const client = useApolloClient();
  useEffect(() => {
    if (currentMissions.length > 0) {
      Promise.all(
        currentMissions.map((mission) =>
          client.query({
            query: GET_USER_MISSION_ACTIVITIES,
            variables: { missionId: parseInt(mission.id) },
          })
        )
      )
        .then((results) => {
          // Create a copy of currentMissions
          const missionsWithActivities = currentMissions.map((mission, i) => {
            // Create a copy of the mission object
            const updatedMission = { ...mission };
            // Add the activities to the updatedMission object
            updatedMission.activities =
              results[i].data.getCurrentMissionActivities;
            // Return the updatedMission object
            return updatedMission;
          });
          // Update the state with the updated missions
          setCurrentMissions(missionsWithActivities);
        })
        .catch((error) => console.error(error));
    }
  }, [currentMissions, client]); // Include 'client' in the dependency array

  // Get the mission types from the database
  const missionTypes = useQuery(MISSION_TYPES);

  const handleChange = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setSelectedText(event.target.options[selectedIndex].text);
    setSelectedValue(event.target.value);
  };

  // Call the useMutation hook, passing in the TRIGGER_MY_MISSION mutation
  const [triggerMyMission] = useMutation(TRIGGER_MY_MISSION, {
    onCompleted: () => {
      refetch(); // Refetch the data after the mutation completes
    },
  });

  // Get the logged-in user from the UserContext so we have access to its data
  const { loggedInUser } = useLoggedInUser();

  // Define a function that calls the mutation
  const handleTrigger = () => {
    // console.log('handleTrigger');
    if (selectedValue == "") {
      alert("Please select a mission type.");
      return;
    }
    // Call the mutation, passing in the user ID, city, state, and missionType from the user data
    triggerMyMission({
      variables: {
        userId: loggedInUser.id,
        city: loggedInUser.city,
        state: loggedInUser.state,
        missionType: selectedText,
        missionId: parseInt(selectedValue),
      },
    })
      .then(async (response) => {
        // Log the response
        console.log(
          "triggerMyMission response:",
          response.data.triggerMyMission
        );
      })
      .catch((err) => {
        // Log any errors that occur
        console.log("An error has occurred while triggering the mission.");
        console.error("triggerMyMission error", err); // Log any errors
      });
  };

  // Display the current triggered missions, a mission type dropdown, and a button to trigger the mutation
  return (
    <div className="flex gap-4 flex-col">
      <div>
        <select
          onChange={handleChange}
          className="text-sm text-gray-900 font-bold border border-gray-300 rounded bg-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a Mission Type</option>
          {missionTypes.data &&
            missionTypes.data.getAllMissionTypes.map((missionType) => (
              <option key={missionType.id} value={missionType.id}>
                {missionType.name}
              </option>
            ))}
        </select>
        <button
          className="px-4 py-2 mx-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-fit"
          onClick={handleTrigger}
        >
          Trigger Mission
        </button>
      </div>
      <div>
        <h2 className="text-lg font-bold">My Triggered Missions</h2>
        <div className="space-y-2">
          {currentMissions &&
            currentMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                title={mission.name}
                description={mission.points + " points"}
                categoryColor={"bg-green-400"}
                missionId={mission.id}
                isComplete={mission.isComplete}
                activitiesCount={mission.activities?.length}
                completedActivitiesCount={
                  mission.activities?.filter((activity) => activity.isComplete)
                    ?.length
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TriggerMyMission;
