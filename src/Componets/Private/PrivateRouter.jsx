import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (!currentUser) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};
// PrivateRouter.propTypes = {
//     children: PropTypes.node,
//   };
export default PrivateRouter;
