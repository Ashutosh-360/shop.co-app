import React from "react";
import msg from "../assets/msg.png";
import twitter from "../assets/twitter icon.png";
import fb from "../assets/fb icon.png";
import git from "../assets/github icon.png";
import insta from "../assets/insta icon.png";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import gpay from "../assets/gpay.png";
import appPay from "../assets/appPay.png";
import paypal from "../assets/paypal.png";

function Footer() {
  return (
    <>
      <div className="flex flex-col m-auto ">
        <div style={{ background: "linear-gradient(to bottom , white 0%, white 50%, #F0F0F0 50%, #F0F0F0 100%)" }}>
          <div className="latestUpdates max-w-screen-xl m-auto  flex bg-black p-16 justify-between rounded-3xl">
            <div className="text-white font-extrabold text-5xl">
              STAY UPTO DATE ABOUT <br />
              OUR LATEST OFFERS
            </div>
            <div className=" flex flex-col gap-4 relative">
              <img className="text-white absolute top-3 left-3" src={msg} />
              <input
                className="rounded-3xl outline-none px-6 py-3"
                placeholder="Enter your email address"
                type="email"
              />
              <button className="rounded-3xl px-6 py-3 bg-white">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="  bg-grey ">
          <div className="footerContent flex justify-between max-w-screen-xl m-auto  py-6">
            <div className="footerFirstColumn flex flex-col gap-6">
              <span className="text-3xl font-black">SHOP.CO</span>
              <span>
                We have clothes that suits your style and <br />
                which you’re proud to wear. From women to men.
              </span>
              <div className="socialMediaIcons flex gap-4">
                <img className="w-7 h-7" src={twitter} />
                <img className="w-7 h-7 rounded-full bg-black p-2" src={fb} />
                <img
                  className="w-8 h-8 rounded-full p-2 bg-white border"
                  src={insta}
                />
                <img
                  className="w-8 h-8 rounded-full p-2 bg-white border"
                  src={git}
                />
              </div>
            </div>
            <div className="footerSecondColumn flex flex-col gap-2">
              <span className="text-xl font-medium">COMPANY</span>
              <span>About</span>
              <span>Features</span>
              <span>Works</span>
              <span>Career</span>
            </div>
            <div className="footerThirdColumn flex flex-col gap-2">
              <span className="text-xl font-medium">HELP</span>
              <span>Customer Support</span>
              <span>Delivery Details</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
            <div className="footerFourthColumn flex flex-col gap-2">
              <span className="text-xl font-medium">FAQ</span>
              <span>Account</span>
              <span>Manage Deliveries</span>
              <span>Orders</span>
              <span>Payments</span>
            </div>
            <div className="footerFifthColumn flex flex-col gap-2">
              <span className="text-xl font-medium">RESOURCES</span>
              <span>Free eBooks</span>
              <span>Development Tutorial</span>
              <span>How to - Blog</span>
              <span>Youtube Playlist</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between  max-w-screen-xl m-auto py-3 items-center">
            <div>Shop.co © 2000-2023, All Rights Reserved</div>
            <div className="flex">
              <img src={visa} />
              <img src={mastercard} />
              <img src={paypal} />
              <img src={appPay} />
              <img src={gpay} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
