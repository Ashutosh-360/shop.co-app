import React, { useState } from "react";
import Header from "../../Components/Header";
import NewArrivals from "../Homepage/Components/NewArrivals";
import Footer from "../../Components/Footer";
import banner from "../../assets/landingBanner.png";
import blackStrip from "../../assets/blacckStrip.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calvinklein from "../../assets/calvinKlein.png";
import prada from "../../assets/prada.png";
import gucci from "../../assets/gucci.png";
import versace from "../../assets/versace.png";
import zara from "../../assets/zara.png";
import BrowseByCategory from "../../Components/BrowseByCategory/BrowseByCategory";
import Reviews from "../../Components/Reviews/Reviews";
import TopSelling from "../Homepage/Components/TopSelling";
function LandingPage() {
  const [brandNames, setBrandNames] = useState([versace, zara, gucci, prada, calvinklein]);

  return (
    <>
      <div className="bannerContainer max-w-screen-xl m-auto flex flex-col gap-24">
        <div>
          <div
            style={{
              backgroundImage: `url(${banner})`,

              height: "663px",
            }}
            className="w-full flex flex-col"
          >
            <div className=" flex flex-col w-1/2 gap-8 pl-20">
              <span className="text-6xl font-extrabold pt-20">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </span>
              <span className="">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </span>
              <button className="w-52 bg-black px-12 py-4 text-white ml- rounded-full">
                Shop Now
              </button>
            </div>
            <div className="w-1/2 flex pl-20 items-center pt-11">
             
              <div className="border-r-2 p-4"><span className="text-5xl font-medium">200+</span><br/> <span className="text-xs">International Brands</span></div>
              <div className="border-r-2 p-4"><span className="text-5xl font-medium">2000+</span><br/> <span className="text-xs">High-Quality Products</span></div>
              <div className="p-4"><span className="text-5xl font-medium">30,000+</span><br/> <span className="text-xs">Happy Customers</span></div>

            </div>
          </div>
          <div className="brandNames flex bg-black h-20 justify-around items-center">
            {brandNames?.map((elem) => {
              return <img src={elem} className="h-6" />;
            })}
          </div>
        </div>
        <div>
          <NewArrivals />
        </div>
        <TopSelling />
        <div>
          <BrowseByCategory />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
