import React from "react";
import tshirt from "../assets/tshirts.png";
import starRating from "../assets/starRating.png";
import halfStar from "../assets/halfstar.png";

function ProductCard({ data }) {
  console.log(data,"data")
  return (
    <div className="flex flex-col gap-2">
      <a
        href={`/product_details?id=${data._id}`}
        className="flex justify-center items-center w-64 h-auto"
      >
        <img className="rounded-xl" src={data?.front_image} alt="" />
      </a>
      <div className="flex flex-col gap-0.5">
        <div className="text-black font-semibold text-base">{data?.name}</div>
        <div className="flex gap-4 text-sm items-center">
          <div className="flex gap-1">
            {[...Array(parseInt(data?.rating))].map((ele) => {
              return <img className="h-4" src={starRating} alt="" />;
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
          <div>
            {data?.currency} {data.price}
          </div>
          <div className="px-1 text-sm text-red rounded-full">
                20%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
