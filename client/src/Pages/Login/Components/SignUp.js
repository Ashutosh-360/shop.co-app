import React, { useState } from "react";
import { PostData } from "../../../Utility/API";

function SignUp() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const signUpHandler = () => {
    PostData("register", userCredentials, updateSignUpHandler);
  };

  const updateSignUpHandler = (res) => {
    console.log(res);
  };
  const inputChangeHandler = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  return (
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
  );
}

export default SignUp;
