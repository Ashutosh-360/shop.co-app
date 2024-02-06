import React, { useState } from "react";
import Header from "../../Components/Header";
import NewArrivals from "../Homepage/Components/NewArrivals";
import Footer from "../../Components/Footer";
import banner from "../../assets/landingBanner.png";
import blackStrip from "../../assets/blacckStrip.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calvinklein from "../../assets/calvinKlein.png"
import prada from "../../assets/prada.png"
import gucci from "../../assets/gucci.png"
import versace from "../../assets/versace.png"
import zara from "../../assets/zara.png"
import BrowseByCategory from "../../Components/BrowseByCategory/BrowseByCategory";
import Reviews from "../../Components/Reviews/Reviews";
import TopSelling from "../Homepage/Components/TopSelling";
function LandingPage() {
  const [brandNames,setBrandNames] = useState([versace,zara,gucci,prada,calvinklein])

  
  return (
    <>
      <Header />
      <div className="bannerContainer max-w-screen-xl m-auto flex flex-col gap-24">
        <div>
          <img src={banner} />
          <div className="brandNames flex bg-black h-20 justify-around items-center">
            {brandNames?.map((elem)=>{
              {console.log(elem,"sssssssssssss")}
           return <img src={elem} className="h-6"/>
            })}
          </div>
        </div>
      <div>
      <NewArrivals />
      </div>
      <div>
        <TopSelling/>
      </div>
      <div>
      <BrowseByCategory/>
      </div>
    
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
