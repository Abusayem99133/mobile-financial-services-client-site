import { Outlet } from "react-router-dom";

const DashboardRoute = () => {
  return (
    <div className="min-h-screen md:flex">
      <h1>sidevar</h1>
      <div>
        <div className="flex-1 md:ml-60">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoute;
