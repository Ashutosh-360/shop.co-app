import React from "react";
import lottieJson from "../assets/cart.json";
import Lottie from "react-lottie-player";
function Loader() {
  return (
    <div
      className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[100vw] h-[100vh] flex justify-center items-center z-[1000]"
      style={{ background: "rgba(0,0,0,0.2)" }}
    >
      <Lottie loop animationData={lottieJson} play style={{ width: 350, height: 350 }} />;
    </div>
  );
}

export default Loader;
