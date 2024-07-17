import { createBrowserRouter } from "react-router-dom";
import Register from "../../Registration/Register";
import Login from "../Login";
import Profile from "../../Profile/Profile";
import PrivateRouter from "../../../Private/PrivateRouter";
import Dashboard from "../../../DashBoards/Dashboard";
import Main from "../../../Main";
import SendMoney from "../../Users/Send-Money/SendMoney";
import CashOut from "../../Users/CashOut/CashOut";

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
      {
        path: "sendMoney",
        element: <SendMoney />,
      },
      {
        path: "cash-Out",
        element: <CashOut />,
      },
    ],
  },
]);
