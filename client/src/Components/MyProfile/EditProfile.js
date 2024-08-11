import React from "react";

export default function EditProfile() {
  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-4 pt-4">
      <div className="font-bold text-3xl">Settings</div>
      <div className="flex flex-col gap-4">
        <div className="font-semibold text-2xl">Account Details</div>
        <div className="flex flex-col gap-2">
          <div className="text-lg">Email</div>
          <input
            type="email"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Enter your Email"
          />

          <div className="text-lg">Phone Number</div>
          <input
            type="number"
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Contact Number"
          />
          <div className="text-lg">Date of Birth</div>
          <input
            type="date"
            className="border w-[500px] outline-none rounded-md p-2"
          />
        </div>
        <div className="font-semibold text-2xl">Location</div>
        <div className="flex flex-col gap-2">
          <div className="text-lg">Country</div>
          <input
            className="border w-[500px] outline-none rounded-md p-2"
            placeholder="Country"
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
        <div>
          <div>Delete Account</div>
        </div>
      </div>
      <div className="flex justify-end gap-2 pb-6">
        <button className="py-2 px-4 bg-gray-200 rounded-md">Delete</button>
        <button className="py-2 px-4 bg-black text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}
