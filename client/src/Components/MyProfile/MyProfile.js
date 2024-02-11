import React from "react";
import cat from "../../assets/catProfile.jpeg";

export default function MyProfile() {
  return (
    <>
      <div className="max-w-screen-xl m-auto flex flex-col gap-10 pb-4">
        <div className="profileImgNameContainer flex gap-4 items-center justify-between pt-8">
          <div className="items-center flex gap-4">
            <img src={cat} className="w-32" />
            <div className="flex flex-col">
              <div className="font-bold text-xl">John Doe</div>
              <div className="text-gray-500">@john_doe</div>
            </div>
          </div>
          <div className="editProfileAndLogout">
            <div className="flex gap-2">
              <button className="font-semibold text-lg py-3 px-4 bg-gray-200 rounded-md">
                {" "}
                Edit Profile
              </button>
              <button className="font-semibold text-lg text-gray-200 py-3 px-4 bg-black rounded-md">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="accountInfo flex flex-col gap-8">
          <div className="text-2xl font-semibold">Account Information</div>
          <div className="flex gap-8 flex-col">
            <div className="flex gap-2">
              <div >
                <i className=" fa-regular fa-user p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Name</div>
                <div className="text-gray-500">John Doe</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div >
                <i className=" fa-regular fa-envelope p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Email</div>
                <div className="text-gray-500">john_doe@gmail.com</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div >
                <i className="fa-solid fa-mobile p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Phone Number</div>
                <div className="text-gray-500">7775882602</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div >
                <i className="fa-solid fa-calendar-days p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Date of Birth</div>
                <div className="text-gray-500">02/04/1998</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div >
                <i className="fa-solid fa-person p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Gender</div>
                <div className="text-gray-500">Male</div>
              </div>
            </div>
              <div className="flex gap-2">
              <div >
                <i className="fa-solid fa-truck-fast p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Shipping Address</div>
                <div className="text-gray-500">640, Shree Shyam Pg</div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </>
  );
}
