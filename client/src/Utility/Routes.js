import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import ProductDetails from "../Components/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import SearchProduct from "../Pages/SearchProduct/SearchProduct";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyProfile from "../Components/MyProfile/MyProfile";
import EditProfile from "../Components/MyProfile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "product",
        element: <ProductDetails />,
      },

      {
        path: "search",
        element: <SearchProduct />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
      {
        path: "edit_profile",
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
