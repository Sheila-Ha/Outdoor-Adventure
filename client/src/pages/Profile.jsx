/*import { useQuery } from "@apollo/client";
import { FIND_USERS } from "../graphql/query";

export default function Profile() {
  const { loading, error, data } = useQuery(FIND_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.findUsers.map((user) => {
        return (
          <li className="p-4" key={user.id}>
            {user.id}. {user.name}
          </li>
        );
      })}
    </ul>
  );
}*/
import { useQuery } from "@apollo/client";

import { GET_CURRENT_MISSION } from "../graphql/query";

export default function Profile() {
  const { loading, data } = useQuery(GET_CURRENT_MISSION);
  const currentMissionList = data?.getCurrentMission || [];

  console.log("im here");
  console.log(data);
  console.log(currentMissionList);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {currentMissionList.map((x) => {
          return (
            <li className="p-4" key={x._id}>
              {x._id}. {x.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
