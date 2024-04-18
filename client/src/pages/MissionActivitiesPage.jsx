import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_USER_MISSION_BY_MISSION_ID, GET_USER_MISSION_ACTIVITIES } from "../graphql/query";

function MissionActivitiesPage() {
  const { missionId } = useParams();

// Get all current missions for the user
const { loading: loading1, error: error1, data: data1 } = useQuery(GET_USER_MISSION_BY_MISSION_ID, {
    variables: { missionId: parseInt(missionId) },
});
const currentMission = data1?.getCurrentMissionByMissionId;

const { loading: loading2, error: error2, data: data2 } = useQuery(GET_USER_MISSION_ACTIVITIES, {
    variables: { missionId: parseInt(missionId) },
});
console.log(data2);
const activities = data2?.getCurrentMissionActivities;

if (loading1 || loading2) return <p>Loading...</p>;
if (error1) return <p>Error : {error1.message}</p>;
if (error2) return <p>Error : {error2.message}</p>;

  return (
    <div className="flex flex-col h-screen gap-4 p-4 overflow-hidden">
        <h2>{currentMission.name}</h2>
        <ul>
        {/* {data.map((activity) => {
            return (
            <li className="p-4" key={activity.id}>
                {activity.id}. {activity.name}
            </li>
            ); */}
        </ul>
    </div>
  );
}

export default MissionActivitiesPage;