import React from "react";
import Header from "../../Components/Header";
import NewArrivals from "./Components/NewArrivals";
import Footer from "../../Components/Footer";
import ProductDetails from "../../Components/ProductDetails";
import AddProduct from "../AddProduct/AddProduct";

function Homepage() {
  return (
    <>
      <Header />
      {/* <NewArrivals /> */}
      <ProductDetails />

      {/* <Footer/> */}
    </>
  );
}

export default Homepage;
