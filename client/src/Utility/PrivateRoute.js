import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Layout from "../Components/Layout/Layout";

const PrivateRoute = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  return authToken ? <Layout /> : <Navigate to="/login" />;
};

export default PrivateRoute;
