import React, { useEffect } from "react";
import { PostData } from "../../Utility/API";

function AddToCart(productId) {
  const addToCartHandler = () => {
    PostData(
      "add_to_cart",
      {
        product_id: productId.productId._id,
        size: productId.selectedSize,
        quantity: productId.quantity,
      },
      (res) => {
        console.log(res);
      }
    );
  };

  return (
    <>
      <button
        className="bg-gray-900 px-24 py-2 rounded-3xl text-white"
        onClick={addToCartHandler}
      >
        Add To Cart
      </button>
    </>
  );
}
export default AddToCart;
