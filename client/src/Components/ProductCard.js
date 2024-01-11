import React from "react";
import tshirt from "../assets/tshirts.png";
import starRating from "../assets/starRating.png";
function ProductCard({ data }) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={`/product_details?id=${data._id}`}
        className="flex justify-center items-center w-72 h-auto"
      >
        <img className="rounded-2xl" src={data?.front_image} alt="" />
      </a>
      <div className="flex flex-col gap-1">
        <div>{data?.name}</div>
        <div className="flex gap-4">
          <img className="w-4" src={starRating} alt="" />
          <div>{data?.rating}/5</div>
        </div>
        <div>
          {data?.currency} {data.discounted_price}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
