import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./page/Home/Home";
import Register from "./page/Registration/Register";
import Login from "./page/Login/Login";
import Profile from "./page/Profile/Profile";
import PrivateRouter from "./Private/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
