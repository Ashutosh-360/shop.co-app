import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { GetData } from "../../Utility/API";
import CartProduct from "./Components/CartProduct";
import Footer from "../../Components/Footer";

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
    
      <Header />
      <div className="w-full max-w-screen-xl p-2 py-10 m-auto gap-4 flex flex-col mb-12">
        <div className="uppercase text-4xl font-bold">Your cart</div>
        <div className="w-full flex gap-4">
          <div className="w-7/12 p-4 border rounded-lg flex flex-col gap-4">
            {cartData?.map((item) => {
              return <CartProduct item={item} key={item?._id} />;
            })}
          </div>
          <div className="w-5/12 p-4 border rounded-lg flex flex-col gap-6 ">
            <div className="text-xl">Order Summary</div>
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex justify-between items-center text-lg">
                <div className="text-faint_text">Subtotal</div>
                <div className="font-semibold">565</div>
              </div>
              <div className="w-full flex justify-between items-center text-lg">
                <div className="text-faint_text">Discount (-20%)</div>
                <div className="font-semibold text-red">113</div>
              </div>
              <div className="w-full flex justify-between items-center text-lg">
                <div className="text-faint_text">Delivery Fee</div>
                <div className="font-semibold">565</div>
              </div>
              <div className="border"></div>
              <div className="w-full flex justify-between items-center">
                <div className="text-faint_text text-lg">Delivery Fee</div>
                <div className="font-semibold text-xl">565</div>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full justify-between">
              <div><input className="p-3 rounded-full bg-grey outline-none" type="text" placeholder="Add promo code"/></div>
              <div><button className="bg-primary p-3 px-6 text-white rounded-full">Apply</button></div>
            </div>
            <div>
              <button className="flex gap-2 p-4 px-12 w-full bg-primary text-white rounded-full justify-center">Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
     
    </>
  );
}

export default Cart;
