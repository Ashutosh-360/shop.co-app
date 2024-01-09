import React from "react";
import { PostData } from "../../Utility/API";

function AddWishlist() {
  const wishlistData = {
    user_id: "6593ed9b636b9a7f609bb854",
    product_id: "65944e9710c2a53fa96ee526",
    wishlist_status: true,
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
