import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./page/Home/Home";
import Register from "./page/Registration/Register";
import Login from "./page/Login/Login";

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
        element: "",
      },
    ],
  },
]);
