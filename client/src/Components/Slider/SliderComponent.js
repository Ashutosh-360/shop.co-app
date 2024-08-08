import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

function SliderComponent({ productData }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: window.innerWidth > 1000 ? 4 : 1,
    slidesToScroll: window.innerWidth > 1000 ? 2 : 1,
    arrows: true,
    dots: false,

    prevArrow: (
      <div
        style={{ background: "red" }}
        className="rounded-lg w-12 h-12 border bg-white text-primary flex justify-center items-center"
      >
        <div className="slick-arrow">
          <img
            src={
              "https://cdn2.workadvantage.in/images/cdn_upload/cdn/1742/c93e491f3e.svg"
            }
            alt=""
          />
        </div>
      </div>
    ),
    nextArrow: (
      <div className="rounded-lg w-12 h-12 border bg-white text-primary flex justify-center items-center">
        <div
          style={{ transform: "translateY(-50%) rotate(180deg)" }}
          className="slick-arrow"
        >
          <img
            className=""
            src="https://cdn2.workadvantage.in/images/cdn_upload/cdn/1742/c93e491f3e.svg"
            alt=""
          />
        </div>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {productData?.map((item, idx) => (
        <ProductCard data={item} key={idx} />
      ))}
    </Slider>
  );
}

export default SliderComponent;
