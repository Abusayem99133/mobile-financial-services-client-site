import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Register from "../../Registration/Register";
import Login from "../Login";
import Profile from "../../Profile/Profile";
import PrivateRouter from "../../../Private/PrivateRouter";
import Dashboard from "../../../DashBoards/Dashboard";
import Main from "../../../Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
