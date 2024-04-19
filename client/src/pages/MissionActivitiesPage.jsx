import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  GET_USER_MISSION_BY_MISSION_ID,
  GET_USER_MISSION_ACTIVITIES,
} from "../graphql/query";
import { UPDATE_ACTIVITY } from "../graphql/mutation/index.js";

function MissionActivitiesPage() {
  const { missionId } = useParams();

  const [updateActivity] = useMutation(UPDATE_ACTIVITY);
  const [activities, setActivities] = useState([]);
  const [saveResult, setSaveResult] = useState(null);

  // Get current mission by ID
  const { loading, error, data } = useQuery(GET_USER_MISSION_BY_MISSION_ID, {
    variables: { missionId: parseInt(missionId) },
  });
  const currentMission = data?.getCurrentMissionByMissionId;

  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(GET_USER_MISSION_ACTIVITIES, {
    variables: { missionId: parseInt(missionId) },
  });

  useEffect(() => {
    if (!loading2 && data2) {
      setActivities(data2.getCurrentMissionActivities);
    }
  }, [loading2, data2]);

  if (loading || loading2) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (error2) return <p>Error : {error2.message}</p>;

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    // Find the activity by ID and update the complete field
    setActivities((prevActivities) => {
      return prevActivities.map((activity) => {
        if (activity.id === name) {
          return { ...activity, isComplete: checked };
        } else {
          return activity;
        }
      });
    });
  }

  async function handleSaveClick() {
    try {
      // Update the activities
      activities.forEach(async (activity) => {
        await updateActivity({
          variables: {
            id: parseInt(activity.id),
            isComplete: Boolean(activity.isComplete),
          },
        });
      });
      setSaveResult("Data saved.");

      // After activities are saved, check to see if they are all checked off.
      var checkComplete = true;
      activities.forEach(async (activity) => {
        if(!(activity.isComplete)){
          checkComplete = false;
          return;
        }; 
      });

      if (checkComplete)
        setSaveResult("Mission Complete! Congratulations!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col h-screen gap-4 p-4 overflow-hidden">
      <div className="px-4">
        <h2 className="my-4">
          {currentMission.name} - {currentMission.points} points
        </h2>
        <p>{currentMission.description}</p>
        <ul>
          {activities?.map((activity) => (
            <li key={activity.id}>
              {/* // Display the checkbox and activity name */}
              <input
                type="checkbox"
                name={activity.id}
                checked={activity.isComplete || false}
                onChange={handleCheckboxChange}
              />
              <span className="mx-2">
                {/* // Display the activity name and image */}
                <label htmlFor={activity.id}>
                  {activity.image && (
                    <img src={activity.image} alt={activity.name} />
                  )}
                  {activity.name}
                </label>
              </span>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 w-fit"
          onClick={handleSaveClick}
        >
          Save
        </button> <span className="pl-4 font-bold">{saveResult}</span>
        <p>
          <a href="/">&lt; Back to Home</a>
        </p>
      </div>
    </div>
  );
}
export default MissionActivitiesPage;
