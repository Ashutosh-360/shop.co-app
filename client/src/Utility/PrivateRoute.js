import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const authToken = useSelector((state) => state.auth.authToken);

  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
