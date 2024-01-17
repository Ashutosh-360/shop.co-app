import React, { useState } from "react";
import Counter from "../../../Components/Counter/Counter";

function CartProduct({ item }) {
  const [quantity, setQuantity] = useState(item?.quantity);

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementHandler = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex gap-2 w-full h-28">
      <div className="h-full w-28 object-contain">
        <img className="rounded-md h-full" src={item.front_image} alt="" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-between gap-1 items-start">
          <div className="flex flex-col">
            <div className="font-semibold text-lg">{item?.name}</div>
            <div className="text-sm">
              Size: <span className="text-faint_text">{item?.size}</span>
            </div>
            <div className="text-sm">
              Color:{" "}
              <span className="text-faint_text">{item?.variant?.color} </span>
            </div>
          </div>
          <div className="font-semibold">
            {item.currency} {item.discounted_price}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 items-end">
          <div className="text-red">
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div className="bg-grey p-2 px-3 rounded-full flex gap-3 items-center">
            <div className="text-sm cursor-pointer" onClick={decrementHandler}>
              <i class="fa-solid fa-minus"></i>
            </div>
            <div className="w-4 text-center">{quantity}</div>
            <div className="text-sm cursor-pointer" onClick={incrementHandler}>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
