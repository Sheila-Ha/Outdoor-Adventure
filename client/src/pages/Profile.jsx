import { useQuery } from "@apollo/client";
import { FIND_USERS } from "../graphql/query";

export default function Profile() {
  const { loading, error, data } = useQuery(FIND_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.findUsers.map((user) => {
        return (
          <li key={user.id}>
            {user.id}.{user.name}
          </li>
        );
      })}
    </ul>
  );
}
