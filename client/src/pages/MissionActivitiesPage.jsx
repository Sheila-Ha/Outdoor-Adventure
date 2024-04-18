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
            <input type="checkbox" />
            <span className= "mx-2">
              <label>
                {activity.image && (
                  <img src={activity.image} alt={activity.name} />
                )}
                {activity.name}
              </label>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissionActivitiesPage;
