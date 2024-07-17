import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();

    navigate("/login"); // Redirect to homepage after logout
  };
  return (
    <div className="">
      <div className=" drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content flex flex-col items-center justify-center p-4 ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden "
          >
            <GiHamburgerMenu />
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-orange-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/profile"> Overview</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/sendMoney">Send-Money</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cash-Out">Cash-Out</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/transactions"> Transactions</NavLink>
            </li>

            <div className="divider"></div>
          </ul>
          <button className="bg-orange-200 w-full btn " onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
