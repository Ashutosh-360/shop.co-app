import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../../Components/ProductCard";
import { GetData } from "../../../Utility/API";

function TopSelling() {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    GetData("new_arrivals", {}, updateNewArrivalsHandler);
  }, []);

  const updateNewArrivalsHandler = (res) => {
    setNewArrivals(res.data.results);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: true,
    autoPlaySpeed: 1000,
    useTransform: true,
    touchThreshold: 5,
    adaptiveHeight: true,
  };

  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-6 items-center">
      <div className="text-5xl font-extrabold">TOP SELLING</div>
      <div>
        <Slider {...settings}>
          {newArrivals.map((item) => (
            <ProductCard data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopSelling;
