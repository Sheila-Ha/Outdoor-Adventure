import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar.jsx";

export default function Component() {
  const { pathname } = useLocation();
  return (
    <div className="grid gap-4">
      <nav className="flex h-14 items-center px-4 border-b border-gray-200 w-full shrink-0 dark:border-gray-800">
        <Link className="flex items-center font-semibold" href="#">
          Outdoor Antics
        </Link>
        <div className="flex-1" />
        <div className="flex gap-4 text-center">
          <NavItem to={"/"} active={pathname === "/"}>
            Home
          </NavItem>
          <NavItem to={"/profile"} active={pathname === "/profile"}>
            Profile
          </NavItem>
        </div>
        <Button className="ml-4" size="icon" variant="outline">
          <Avatar>
            {/* we can replace with other avatar */}
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="sr-only">Toggle user menu</span>
        </Button>
      </nav>
    </div>
  );
}

function NavItem({ to, children, active }) {
  return (
    <Link
      className={`flex h-10 items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-300 focus:text-gray-900 ${
        active ? "bg-gray-300" : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
