import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard";
import { GetData } from "../../../Utility/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    GetData("new_arrivals", {}, updateNewArrivalsHandler);
  }, []);

  const updateNewArrivalsHandler = (res) => {
    setNewArrivals(res.data.results);
  };

  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-6 items-center">
      <div className="text-5xl font-extrabold">NEW ARRIVALS</div>
      <div className="w-full flex justify-between gap-6">
        {newArrivals?.map((item) => {
          return (
            <div>
              <ProductCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrivals;
