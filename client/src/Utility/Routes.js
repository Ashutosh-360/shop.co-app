import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import ProductDetails from "../Components/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import SearchProduct from "../Pages/SearchProduct/SearchProduct";
import PrivateRoute from "./PrivateRoute";
import YourOrders from "../Components/MyProfile/YourOrders";
import MyWishlist from "../Components/MyProfile/MyWishlist";
import Add from "../Pages/Add/Add";
import MyProfile from "../Pages/MyProfile/MyProfile";
import EditProfile from "../Pages/EditProfile/EditProfile";
import AddAddress from "../Pages/AddAddress/AddAddress";
import MyAddress from "../Pages/MyAddress/MyAddress";

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
        path: "search_product",
        element: <SearchProduct />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
      {
        path: "edit_profile",
        element: <EditProfile />,
      },
      {
        path: "orders",
        element: <YourOrders />,
      },
      {
        path: "wishlist",
        element: <MyWishlist />,
      },
      {
        path: "view_address",
        element: <MyAddress />,
      },
      {
        path: "add_address",
        element: <AddAddress />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
