import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

function SliderComponent({ productData }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],

    prevArrow: (
      <div className="">
        <div className="rounded-full w-8 h-8 flex justify-center items-center border">
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
      <div>
        <div className="rounded-full w-8 h-8 flex justify-center items-center border rotate-180">
          <img
            src={
              "https://cdn2.workadvantage.in/images/cdn_upload/cdn/1742/c93e491f3e.svg"
            }
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
