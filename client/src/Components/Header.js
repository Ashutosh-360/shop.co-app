import React from "react";

function Header() {
  return (
    <div className="p-6">
      <a href="/">
        <div>SHOP.CO</div>
      </a>
      <div className="flex gap-4">
        <div>Shop</div>
        <div>On Sale</div>
        <div>New Arrivals</div>
        <div>Brands</div>
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default Header;
