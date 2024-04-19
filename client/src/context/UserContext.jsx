import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function useLoggedInUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    try {
      const decode = jwtDecode(token);
      console.log(decode);
      console.log(Date.now() / 1000);
      const currentTimeInSec = Date.now() / 1000;
      // if the token is expired, the save token is removed and the user is navigated to login page.
      if (currentTimeInSec > decode.exp) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }
      setLoggedInUser(decode.userInfo);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}
