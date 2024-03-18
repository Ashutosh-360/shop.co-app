import React, { useEffect, useState } from "react";
import arrow from "../../assets/arrow.png";
import wishlist from "../../assets/wishlist.png";
import ProductCard from "../ProductCard";
import { GetData } from "../../Utility/API";
import Loader from "../Loader";

export default function MyWishlist() {
  const [wishlistData, setWishlistData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetData("get_wishlist", {}, handleWishListData)
  },[]);

  const handleWishListData = (response)=>{
    console.log(response.data.results, "wishlist");
      setWishlistData(response.data.results);
      setIsLoading(false);
  }

  return (
    <>
      {isLoading ? <Loader /> : ""}
      {!isLoading && (
        <div className="max-w-screen-xl m-auto pt-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-lg"><a href="/profile">Profile</a>
             <img className="w-2 h-fit" src={arrow} /> Wishlist
          </div>
          <div className="font-bold text-3xl">Your Wishlist</div>
          <div className="flex gap-3 py-8 px-1 max-w-screen-xl m-auto">
            {!!wishlistData ? (
              wishlistData?.map((item) => {
                return (
                  <div className="h-fit grid  gap-4 justify-center">
                    <ProductCard data={item} />
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center flex-col w-1/3 m-auto text-center">
                <img className=" h-auto " src={wishlist} />
                <div className="font-semibold text-lg">
                  Your wishlist is empty.
                </div>
                <div className="text-lg">
                  Save your favorite styles and check back here to see if
                  they're available in your size.
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
