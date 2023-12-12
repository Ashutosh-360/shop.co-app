import React from "react";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import userprofile from "../assets/userprofile.png";

function Header() {
  return (
    <div className="p-6 px-12 flex items-center justify-between">
      <a href="/">
        <div className="font-bold text-2xl">SHOP.CO</div>
      </a>
      <div className="flex gap-6 cursor-pointer text-sm">
        <div>Shop</div>
        <div>On Sale</div>
        <div>New Arrivals</div>
        <div>Brands</div>
      </div>
      <div className="w-full max-w-screen-sm flex relative">
        <img
          className="absolute left-3 top-2/4 -translate-y-1/2"
          src={search}
          alt="search"
        />
        <input
          className="w-full text-sm outline-none bg-gray-100 p-4 py-3 rounded-full px-10"
          placeholder="Search for products..."
          type="search"
        />
      </div>
      <div className="flex items-center gap-6">
        <img className="cursor-pointer" src={cart} alt="cart" />
        <img className="cursor-pointer" src={userprofile} alt="userprofile" />
      </div>
    </div>
  );
}

export default Header;
