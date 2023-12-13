import React from "react";
import tshirt from "../assets/tshirts.png";
import starRating from "../assets/starRating.png";
function ProductCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center w-72 h-auto">
        <img className="rounded-2xl" src={tshirt} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <div>T-SHIRT WITH TAPE DETAILS</div>
        <div className="flex">
          <img className="w-4" src={starRating} alt="" />
        </div>
        <div>$120</div>
      </div>
    </div>
  );
}

export default ProductCard;
