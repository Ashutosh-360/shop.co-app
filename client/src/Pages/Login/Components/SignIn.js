import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { GetData } from "../../../Utility/API";

function SignIn({ setIsSignUp }) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const signInHandler = () => {
    GetData("sign_in", userCredentials, updateSignInHandler);
  };

  const updateSignInHandler = (res) => {
    if (res?.data?.success) {
      navigate("/");
    }
  };
  const inputChangeHandler = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  const showSignUp = () => {
    setIsSignUp(true);
  };
  return (
    <div className="flex flex-col justify-center min-h-screen gap-4 w-full p-12">
      <div>
        <div className="text-2xl font-semibold">Welcome back</div>
        <div className="text-faint_text text-sm">Welcome back! Please enter your details.</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label>Email</label>

          <input
            onChange={inputChangeHandler}
            value={userCredentials.email}
            className="border text-base outline-none rounded-lg p-2"
            type="text"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base">Password</label>

          <input
            onChange={inputChangeHandler}
            value={userCredentials.password}
            className="border outline-none rounded-lg p-2"
            type="text"
            placeholder="Enter your password"
            name="password"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-primary text-white text-lg rounded-lg p-2 px-3"
          onClick={signInHandler}
        >
          Sign In
        </button>
        <button
          className="bg-white border text-primary text-lg rounded-lg p-2 px-3"
          onClick={signInHandler}
        >
          Sign In With Google
        </button>
      </div>
      <div className="text-faint_text">
        Don’t have an account?{" "}
        <span className="text-primary cursor-pointer" onClick={showSignUp}>
          Sign up for free!
        </span>
      </div>
    </div>
  );
}

export default SignIn;
