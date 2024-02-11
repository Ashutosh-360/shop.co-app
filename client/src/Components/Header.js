import React, { useState } from "react";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import userprofile from "../assets/userprofile.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div className="border-b-2">
      <div className="py-6 max-w-screen-xl m-auto flex items-center justify-between">
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
        <div className="flex items-center gap-4 relative">
          <a href="/cart">
            <img className="cursor-pointer" src={cart} alt="cart" />
          </a>
          <img
            className={`cursor-pointer ${
              isOpen ? 'border-b-2 border-black' : ''
            }`}
            onClick={toggleDropdown}
            src={userprofile}
            alt="userprofile"
          />

          {isOpen && (
            <div
              className="origin-top-right absolute ease-in-out top-[50px] mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-1000"
              onBlur={closeDropdown}
            >
              <div className="py-1">
                <a
                  href="profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Orders
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Coupons
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Saved Addresses
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contact us
                </a>
               
                <a
                  href="edit_profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
