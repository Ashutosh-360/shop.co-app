import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
