import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../../Components/ProductCard";
import { GetData } from "../../../Utility/API";
import SliderComponent from "../../../Components/Slider/SliderComponent";

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
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    autoPlay: true,
  };

  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-6 items-center">
      <div className="text-5xl font-extrabold">TOP SELLING</div>

      <div className="w-full">
        <SliderComponent productData={newArrivals} />
      </div>
    </div>
  );
}

export default TopSelling;
