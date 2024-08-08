import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard";
import { GetData } from "../../../Utility/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../../../Components/Slider/SliderComponent";

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    GetData("new_arrivals", {}, updateNewArrivalsHandler);
  }, []);

  const updateNewArrivalsHandler = (res) => {
    setNewArrivals(res.data.results);
  };

  return (
    <div className="max-w-screen-xl w-full m-auto flex flex-col gap-6 items-center">
      <div className="text-5xl font-extrabold">NEW ARRIVALS</div>
      <div className="w-full">
        <SliderComponent productData={newArrivals} />
      </div>
    </div>
  );
}

export default NewArrivals;
