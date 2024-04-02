import { useEffect, useState } from "react";

export default function Profile() {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const userData = await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await userData.json();
    setAllUser(response);
  }

  return (
    <div>
      <div className="text-xl font-bold">Profile Page</div>
      <div>
        {allUser.map((user) => {
          return <div key={user}>{user.name}</div>;
        })}
      </div>
    </div>
  );
}
