import React, { useEffect, useState } from "react";
import NewArrivals from "../Homepage/Components/NewArrivals";
import banner from "../../assets/landingBanner.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calvinklein from "../../assets/calvinKlein.png";
import prada from "../../assets/prada.png";
import gucci from "../../assets/gucci.png";
import versace from "../../assets/versace.png";
import zara from "../../assets/zara.png";
import BrowseByCategory from "../../Components/BrowseByCategory/BrowseByCategory";
import TopSelling from "../Homepage/Components/TopSelling";
import { connect } from "react-redux";
import { GetData } from "../../Utility/API";
import { Link } from "react-router-dom";
function LandingPage() {
  const [brandNames, setBrandNames] = useState([
    versace,
    zara,
    gucci,
    prada,
    calvinklein,
  ]);
  useEffect(() => {
    GetData("get_profile", {}, (response) => {});
  });

  return (
    <>
      <div className="max-w-screen-xl m-auto flex flex-col">
        <div
          style={{
            backgroundImage: `url(${banner})`,
          }}
          className="w-full flex flex-col py-16 p-4 lg:pl-20"
        >
          <div className=" flex flex-col w-full lg:w-1/2 gap-8">
            <span className="text-6xl font-extrabold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </span>
            <span className="">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <Link className="w-52 text-center bg-black px-12 py-4 text-white  rounded-full">
              Shop Now
            </Link>
          </div>
          <div className="w-full lg:w-1/2 text-3xl lg:text-5xl flex items-center pt-11">
            <div className="border-r-2 p-4">
              <span className="font-medium">200+</span>
              <br /> <span className="text-xs">International Brands</span>
            </div>
            <div className="border-r-2 p-4">
              <span className="font-medium">2000+</span>
              <br /> <span className="text-xs">High-Quality Products</span>
            </div>
            <div className="p-4">
              <span className="font-medium">30,000+</span>
              <br /> <span className="text-xs">Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 justify-center w-full bg-black h-20 items-center">
          {brandNames?.map((elem) => {
            return (
              <div className="flex justify-center items-center">
                <img src={elem} className=" h-full object-contain p-2" />
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col gap-6 p-6">
          <NewArrivals />
          <TopSelling />
        </div>
        <BrowseByCategory />
      </div>
    </>
  );
}
let mapStateToProps = (state) => ({
  token: state.authToken,
});

export default connect(mapStateToProps)(LandingPage);
