import React, { useEffect, useState } from "react";
import { PostData } from "../../Utility/API";

export default function EditProfile() {
  const [editProfileData, setEditProfileData] = useState({
    name:"",
    password:"",
    dob:"",
    mobile:"",
  });
  const handleEditProfileApiCall = () => {
    PostData("/edit_profile", { editProfileData }, handleEditProfileData);
  };

  const handleEditProfileData = () => {
    console.log("handleEditProfileData");
  };
  const EditForProfile = (e) => {
    setEditProfileData({...editProfileData, [e.target.name]: e.target.value });
    console.log(e.target.value, e.target.name, e.target, "changeDobForProfile");
  };

  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-4 pt-4">
      <div className="font-bold text-3xl">Settings</div>
      <div className="flex flex-col gap-4">
        <div className="font-semibold text-2xl">Account Details</div>
        <div className="flex flex-col gap-2">
          <div className="text-lg">Name</div>
          <input
            onChange={EditForProfile}
            type="name"
            name="name"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Enter your Name"
          />
          <div className="text-lg">Email</div>
          <input
            type="email"
            name="email"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Enter your Email"
          />
          <div className="text-lg">Password</div>
          <input
            onChange={EditForProfile}
            type="password"
            name="password"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Password"
          />
          <div className="text-lg">Phone Number</div>
          <input
            onChange={EditForProfile}
            type="number"
            name="mobile"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Contact Number"
          />
          <div className="text-lg">Date of Birth</div>
          <input
            onChange={EditForProfile}
            type="date"
            name="dob"
            className="border w-[500px] outline-none rounded-md p-2"
          />
        </div>
        <div className="font-semibold text-2xl">Location</div>
        <div className="flex flex-col gap-2">
          <div className="text-lg">Country</div>
          <input
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Country"
            value={"India"}
          />
          <div className="text-lg">State</div>
          <input
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="State"
          />
          <div className="text-lg">City</div>
          <input
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="City"
          />
          <div className="text-lg">Pin code</div>
          <input
            type="number"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Pin code"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 pb-6">
        <button className="py-2 px-4 bg-gray-200 rounded-md">Delete</button>
        <button onClick={handleEditProfileApiCall} className="py-2 px-4 bg-black text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}
