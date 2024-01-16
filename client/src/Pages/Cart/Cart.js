import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { GetData } from "../../Utility/API";
import CartProduct from "./Components/CartProduct";

function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    GetData("get_cart", {}, getCartDataHandler);
  }, []);

  const getCartDataHandler = (res) => {
    setCartData([...res.data.results]);
  };
  return (
    <>
      {/* <Header /> */}
      <div className="w-full max-w-screen-xl p-2 m-auto">
        <div className="uppercase font-semibold text-xl">Your cart</div>
        <div className="w-full flex gap-4">
          <div className="w-1/2 p-4 border rounded-lg flex flex-col gap-4">
            {cartData?.map((item) => {
              return <CartProduct item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
