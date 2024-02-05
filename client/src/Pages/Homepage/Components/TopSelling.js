import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard";
import { GetData } from "../../../Utility/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopSelling() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    GetData("new_arrivals", {}, updateNewArrivalsHandler);
  }, []);

  const updateNewArrivalsHandler = (res) => {
    setNewArrivals(res.data.results);
  };

  return (
    <>
      <div className="max-w-screen-xl m-auto flex flex-col gap-6 items-center">
        <div className="text-5xl font-extrabold">TOP SELLING</div>
     
          <div style={{ width: "700px" }}>
            <Slider {...settings}>
              <div className="w-full flex justify-between gap-6">
                {newArrivals?.map((item) => {
                  return (
               
                      <div>
                        <ProductCard data={item} />
                      </div>
              
                  );
                })}
              </div>
            </Slider>
          </div>
        
      </div>
    </>
  );
}

export default TopSelling;
