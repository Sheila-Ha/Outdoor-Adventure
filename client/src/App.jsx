import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Outlet />
    </UserProvider>
  );
}

export default App;
