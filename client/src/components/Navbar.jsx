import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav>
      <ul className="flex flex-row gap-2 px-4 justify-end">
        <NavItem
          className={pathname === "/home" ? "bg-blue-500" : ""}
          to="/home"
        >
          Home
        </NavItem>
        <NavItem
          className={pathname === "/profile" ? "bg-blue-500" : ""}
          to="/profile"
        >
          Profile
        </NavItem>
      </ul>
    </nav>
  );
}
function NavItem({ to, children, className }) {
  return (
    <li
      className={`hover:underline hover:underline-offset-4 font-bold px-2 rounded-md ${className}`}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
}
