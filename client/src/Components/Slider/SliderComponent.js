import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

function SliderComponent({ productData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    autoPlay: true,
    prevArrow: (
      <div style={{background:"red"}} className="rounded-lg w-12 h-12 border bg-white text-primary flex justify-center items-center">
        <i className="fa-solid fa-angle-left"></i>
      </div>
    ),
    nextArrow:(
      <div className="rounded-lg w-12 h-12 border bg-white text-primary flex justify-center items-center">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {productData?.map((item,idx) => (
        <ProductCard data={item} key={idx} />
      ))}
    </Slider>
  );
}

export default SliderComponent;
