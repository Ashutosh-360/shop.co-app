import React from "react";
import ProductCard from "../../../Components/ProductCard";

function NewArrivals() {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col gap-6 items-center">
      <div className="text-4xl font-bold">New Arrivals</div>
      <div className="w-full flex justify-between gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default NewArrivals;
