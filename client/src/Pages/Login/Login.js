import React, { useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import loginVector from "../../assets/loginImage.png";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full bg-secondary">
      <div className="max-w-screen-xl flex gap-16 m-auto min-h-screen justify-center items-center">
        <div className="w-1/2 flex justify-center min-h-screen">
          <img className="m-auto h-full" src={loginVector} alt="" />
        </div>

        <div className="w-1/2 min-h-screen">{isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : <SignIn setIsSignUp={setIsSignUp} />}</div>
      </div>
    </div>
  );
}

export default Login;
