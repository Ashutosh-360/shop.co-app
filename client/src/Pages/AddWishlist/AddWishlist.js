import React from "react";
import { PostData } from "../../Utility/API";

function AddWishlist() {
  const wishlistData = {
    user_id: "6593ed9b636b9a7f609bb854",
    product_id: "6590520bcb1a75b5882b3a89",
    wish_status: true,
  };
  const addWishlistHandler = () => {
    PostData("update_wishlist", wishlistData, updateWishlistHandler);
  };

  const updateWishlistHandler = (res) => {};
  return (
    <button onClick={addWishlistHandler} className="bg-black text-white text-lg rounded p-3">
      Add to Wishlist
    </button>
  );
}

export default AddWishlist;
