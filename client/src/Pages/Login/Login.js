import React, { useState } from "react";
import { GetData, PostData } from "../../Utility/API";

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpHandler = () => {
    PostData("register", userCredentials, updateSignUpHandler);
  };

  const updateSignUpHandler = (res) => {
    console.log(res);
  };
  const signInHandler = () => {
    GetData("sign_in", userCredentials, updateSignInHandler);
  };

  const updateSignInHandler = (res) => {
    console.log(res);
  };

  const inputChangeHandler = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="max-w-screen-xl p-6 rouned border m-auto mt-48">
      {isSignUp ? (
        <div className="flex flex-col gap-2">
          <input
            onChange={inputChangeHandler}
            value={userCredentials.email}
            className="border outline-none rounded p-4"
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            onChange={inputChangeHandler}
            value={userCredentials.password}
            className="border outline-none rounded p-4"
            type="text"
            placeholder="password"
            name="password"
          />
          <button className="bg-black text-white text-lg rounded p-3" onClick={signUpHandler}>
            Sign Up
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            onChange={inputChangeHandler}
            value={userCredentials.email}
            className="border outline-none rounded p-4"
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            onChange={inputChangeHandler}
            value={userCredentials.password}
            className="border outline-none rounded p-4"
            type="text"
            placeholder="password"
            name="password"
          />
          <button className="bg-black text-white text-lg rounded p-3" onClick={signInHandler}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
