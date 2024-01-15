import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { GetData } from "../../../Utility/API";
import { isEmail } from "../../../Utility/Validation";
import style from "../Login.module.scss";

function SignIn({ setIsSignUp }) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [isErrorState, setIsErrorState] = useState(false);
  const navigate = useNavigate();
  const signInHandler = () => {
    setIsErrorState(true);
    if (
      !isEmail(userCredentials?.email) ||
      userCredentials?.password?.length < 8
    ) {
      return;
    }
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
    <div className="flex flex-col justify-center min-h-screen gap-8 w-full p-12">
      <div className="flex gap-1 flex-col">
        <div className="text-3xl font-semibold">Welcome back</div>
        <div className="text-faint_text text-sm">
          Welcome back! Please enter your details.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-base text">
            Email <span className="text-red">*</span>
          </label>

          <input
            onChange={inputChangeHandler}
            value={userCredentials.email}
            className={`border text-base outline-none rounded-lg p-3 ${
              isErrorState &&
              !isEmail(userCredentials.email) &&
              style.errorState
            }`}
            type="text"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-semibold text-base">
            Password <span className="text-red">*</span>
          </label>

          <div className="relative">
            <input
              onChange={inputChangeHandler}
              value={userCredentials.password}
              className={`w-full border text-base outline-none rounded-lg p-3 ${
                isErrorState &&
                userCredentials.password.length < 8 &&
                style.errorState
              }`}
              type={showPassword ? "password" : "text"}
              placeholder="Enter your password"
              name="password"
            />

            <i
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              class={`fa-regular ${
                !showPassword ? "fa-eye" : "fa-eye-slash"
              } absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-primary`}
            ></i>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          className="bg-primary transition-all duration-200 text-white text-lg rounded-lg p-2 px-3 opacity-80 hover:opacity-100"
          onClick={signInHandler}
        >
          Sign In
        </button>
        <button className="bg-white border text-primary text-lg rounded-lg p-2 px-3">
          Sign In With Google
        </button>
      </div>
      <div className="text-faint_text text-sm">
        Don’t have an account?{" "}
        <span
          className="text-primary cursor-pointer underline"
          onClick={showSignUp}
        >
          Sign up for free!
        </span>
      </div>
    </div>
  );
}

export default SignIn;
