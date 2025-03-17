import React from "react";
import useNeedToLogin from "../../Utility/CustomHooks/useNeedToLogin";

function NeedToLoginPopup() {
  const { isNeedToLoginPopupOpen, showNeedToOpenPopup } = useNeedToLogin();
  return (
    <Popup isOpen={isNeedToLoginPopupOpen}>
      <div className="flex flex-col gap-2 min-w-[300px] justify-center items-center">
        <img src={loginCart} alt=""></img>
        <div className="text-lg font-semibold">You need to login first</div>
        <Link
          to={"/login"}
          className="text-white bg-primary rounded-lg px-6 py-2"
        >
          Go to Login
        </Link>
      </div>
    </Popup>
  );
}

export default NeedToLoginPopup;
