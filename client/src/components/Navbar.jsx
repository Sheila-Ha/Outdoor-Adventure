import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar.jsx";
import { useLoggedInUser } from "../context/UserContext.jsx";
import UserSetting from "./UserSetting.jsx";

export default function Component() {
  const { loggedInUser, setLoggedInUser } = useLoggedInUser();
  // console.log("loggedInUser", loggedInUser);
  const { pathname } = useLocation();

  return (
    <div className="grid gap-4">
      <nav className="flex h-14 items-center px-4 border-b border-gray-200 w-full shrink-0 dark:border-gray-800">
        <Link
          className="flex items-center gap-2 font-semibold"
          to={loggedInUser?.email ? "/" : "/login"}
        >
          <Avatar>
            {/* we can replace with other avatar */}
            <AvatarImage src="/images/logo.jpeg" />
            <AvatarFallback>logo</AvatarFallback>
          </Avatar>
          Outdoor Antics
        </Link>
        <div className="flex-1" />
        <div className="flex gap-4 text-center">
          {loggedInUser?.email ? (
            <>
              <NavItem to={"/"} active={pathname === "/"}>
                Home
              </NavItem>
              <NavItem to={"/profile"} active={pathname === "/profile"}>
                Profile
              </NavItem>
<<<<<<< HEAD
              <NavItem to={"/settings"} active={pathname === "/Settings"} >
                Settings
              </NavItem>
              {/* <NavItem to={"/funFact"} active={pathname === "/funFact"}>
                Fun Fact
              </NavItem> */}
=======
>>>>>>> origin/Develop
              <NavItem
                to={"/login"}
                onClick={() => {
                  localStorage.removeItem("token");
                  setLoggedInUser(null);
                }}
              >
                Logout
              </NavItem>
              <UserSetting />
            </>
          ) : (
            <>
              <NavItem to={"/login"} active={pathname === "/login"}>
                Login
              </NavItem>
              <NavItem to={"/sign-up"} active={pathname === "/sign-up"}>
                Sign Up
              </NavItem>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

function NavItem({ to, children, active, onClick }) {
  return (
    <Link
      className={`flex h-10 items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-300 focus:text-gray-900 ${
        active ? "bg-gray-300" : ""
      }`}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
