import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./page/Registration/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
