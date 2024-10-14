import React, { useState } from "react";
import { PostData } from "../../../Utility/API";
import useLoader from "../../../Utility/CustomHooks/useLoader";

function CartProduct({ item, callCartApiHandler, setIsLoading }) {
  const { showLoader } = useLoader();

  const incrementdecrementHandler = (action, item) => {
    if (action == "substract" && item.quantity < 1) {
      return;
    }
    showLoader(true);
    let payload = {
      product_id: item.product_id,
      size: item.size,
      quantity: action === "add" ? item.quantity + 1 : item.quantity - 1,
    };

    PostData("add_to_cart", payload, updateCartHandler);
  };

  const updateCartHandler = () => {
    callCartApiHandler();
  };

  const deleteFromCartHandler = (item) => {
    showLoader(true);

    let payload = {
      product_id: item.product_id,
      size: item.size,
      quantity: 0,
    };

    PostData("add_to_cart", payload, updateCartHandler);
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
            <i
              class="fa-regular fa-trash-can cursor-pointer"
              onClick={() => deleteFromCartHandler(item)}
            ></i>
          </div>
          <div className="bg-grey p-2 px-3 rounded-full flex gap-3 items-center">
            <div
              className="text-sm cursor-pointer"
              onClick={() => incrementdecrementHandler("substract", item)}
            >
              <i class="fa-solid fa-minus"></i>
            </div>
            <div className="w-4 text-center">{item?.quantity}</div>
            <div
              className="text-sm cursor-pointer"
              onClick={() => incrementdecrementHandler("add", item)}
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
