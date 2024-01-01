import React from "react";

function Login() {

  const signUpHandler = () => {
    
  }
  return (
    <div className="max-w-screen-xl p-6 rouned border m-auto mt-48">
      <div className="flex flex-col gap-2">
        <input className="border outline-none rounded p-4" type="text" placeholder="email" />
        <input className="border outline-none rounded p-4" type="text" placeholder="password" />
        <button className="bg-black text-white text-lg rounded p-3" onClick={signUpHandler}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
