import React from "react";
import Counter from "../../../Components/Counter/Counter";

function CartProduct({ item }) {
  return (
    <div className="flex gap-2 w-full h-28">
      <div className="h-full w-28 object-contain">
        <img className="rounded-md h-full" src={item.front_image} alt="" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-between gap-1 items-start">
          <div className="flex flex-col">
            <div className="font-semibold text-base">{item?.name}</div>
            <div className="text-sm"> size: {item?.size}</div>
            <div className="text-sm"> quantity: {item?.quantity}</div>
          </div>
          <div className="font-semibold">
            {item.currency} {item.discounted_price}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 items-end">
          <div className="text-red">
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
