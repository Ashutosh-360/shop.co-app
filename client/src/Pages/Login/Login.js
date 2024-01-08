import React, { useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import loginVector from "../../assets/6666912.png";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full bg-secondary">
      <div className="max-w-screen-xl flex gap-16 m-auto min-h-screen justify-center items-center">
        <div className="w-1/2">
          <img className="w-full" src={loginVector} alt="" />
        </div>

        <div className="w-1/2 min-h-screen">{isSignUp ? <SignUp /> : <SignIn />}</div>
      </div>
    </div>
  );
}

export default Login;
