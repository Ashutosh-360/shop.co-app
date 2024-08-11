import React from "react";
import starRating from "../assets/starRating.png";
import halfStar from "../assets/halfstar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard({ data }) {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <a
        target=""
        href={`/product?id=${data?._id}`}
        className="flex justify-center items-center w-full lg:w-64 h-auto"
      >
        <img className="rounded-xl " src={data?.front_image} alt="" />
      </a>
      <div className="flex flex-col gap-0.5">
        <div className="text-black font-semibold text-base">{data?.name}</div>
        <div className="flex gap-4 text-sm items-center">
          <div className="flex gap-1">
            {[...Array(parseInt(data?.rating))].map((ele, idx) => {
              return <img key={idx} className="h-4" src={starRating} alt="" />;
            })}
            {data?.rating > parseInt(data?.rating) ? (
              <img className="h-4" src={halfStar} alt="" />
            ) : (
              ""
            )}
          </div>
          <div>{data?.rating}/5</div>
        </div>
        <div className="flex gap-4 text-lg font-semibold items-center">
          <div>
            {data?.currency} {data.discounted_price}
          </div>
          <div className="line-through opacity-50">
            {data?.currency} {data.price}
          </div>
          <div className="px-1 text-sm text-red  rounded-full">20%</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
