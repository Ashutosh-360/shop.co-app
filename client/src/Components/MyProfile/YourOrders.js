import React from "react";
import arrow from "../../assets/arrow.png";

export default function YourOrders() {
  return (
    <div className="max-w-screen-xl m-auto pt-6 flex flex-col gap-4">
      <div className="text-lg flex gap-2 items-center">
        <a href="/">Home</a> <img className="w-2 h-fit" src={arrow} /> Account
      </div>
      <div className="font-bold text-3xl">Your Orders</div>
      <div className="flex justify-between">
      <div className="flex gap-2 pb-6">
        <i class="fa-brands fa-shopify p-4 bg-gray-200 rounded-md"></i>
        <div>
          <div className="text-xl">Order #1234567890</div>
          <div className="text-gray-500">June 20, 2021</div>
        </div>
        
      </div>
      <div className="text-xl">$32.00</div>
      </div>
    </div>
  );
}
