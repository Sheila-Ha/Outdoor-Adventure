import { useQuery, gql } from "@apollo/client";

const Find_Users = gql`
  query FindUsers {
    findUsers {
      id
      name
      interest
    }
  }
`;
export default function Profile() {
  const { loading, error, data } = useQuery(Find_Users);

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
