import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile.jsx";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />
      }
    ],
  },
]);
export default router;
