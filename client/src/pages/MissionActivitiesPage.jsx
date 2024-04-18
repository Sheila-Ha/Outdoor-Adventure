import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  GET_USER_MISSION_BY_MISSION_ID,
  GET_USER_MISSION_ACTIVITIES,
} from "../graphql/query";

function MissionActivitiesPage() {
  const { missionId } = useParams();

  // Get current mission by ID
  const {
    loading: loading1,
    error: error1,
    data: data1,
  } = useQuery(GET_USER_MISSION_BY_MISSION_ID, {
    variables: { missionId: parseInt(missionId) },
  });
  const currentMission = data1?.getCurrentMissionByMissionId;

  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(GET_USER_MISSION_ACTIVITIES, {
    variables: { missionId: parseInt(missionId) },
  });

  const activities = data2?.getCurrentMissionActivities;

  if (loading1 || loading2) return <p>Loading...</p>;
  if (error1) return <p>Error : {error1.message}</p>;
  if (error2) return <p>Error : {error2.message}</p>;

  return (
    <div className="flex flex-col h-screen gap-4 p-4 overflow-hidden">
      <h2>
        {currentMission.name} - {currentMission.points} points
      </h2>
      <p>{currentMission.description}</p>
      <ul className="mx-4">
        {activities.map((activity) => (
          <li key={activity.id}>
            {/* // Display the checkbox and activity name */}
            <input type="checkbox" name= {activity.id} value= {activity.id}/>
            <span className= "mx-2">
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
      <button className="px-4 py-2 mx-4 text-white bg-blue-500 rounded front-bolc hover: big-blug-700 w-fit"> Save        
      </button>
    </div>
  );
}

export default MissionActivitiesPage;
