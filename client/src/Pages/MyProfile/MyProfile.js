import React, { useEffect, useState } from "react";
import { store } from "../../Store/store";
import { Link } from "react-router-dom";
import { GetData } from "../../Utility/API";
export default function MyProfile() {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    GetData("get_profile", {}, (response) => {
      setProfileData(response.data.results);
    });
    setProfileData(store.getState()?.user?.userDetails);
  }, []);

  const logOutFunc = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <div className="max-w-screen-xl m-auto flex flex-col gap-10 pb-4">
        <div className="profileImgNameContainer flex gap-4 items-center justify-between pt-8">
          <div className="items-center flex gap-4">
            {profileData.profile_image ? (
              <img src={profileData?.profile_image} className="w-32" />
            ) : (
              <div className="w-12 h-12 flex justify-center items-center rounded-full border text-lg font-semibold">
                {profileData?.email?.split("")[0]?.toUpperCase()}
              </div>
            )}
            <div className="flex flex-col">
              <div className="font-bold text-xl">{profileData?.name}</div>
              <div className="text-gray-500">{profileData?.email}</div>
            </div>
          </div>
          <div className="editProfileAndLogout">
            <div className="flex gap-2">
              <button className="font-semibold text-lg py-3 px-4 bg-gray-200 rounded-md">
                {" "}
                <Link to={"/edit_profile"}>Edit Profile</Link>
              </button>
              <button
                className="font-semibold text-lg text-gray-200 py-3 px-4 bg-black rounded-md"
                onClick={logOutFunc}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="accountInfo flex flex-col gap-8">
          <div className="text-2xl font-semibold">Account Information</div>
          <div className="flex gap-8 flex-col">
            <div className="flex gap-2">
              <div>
                <i className=" fa-regular fa-user p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Name</div>
                <div className="text-gray-500">
                  {profileData?.name || "---"}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <i className=" fa-regular fa-envelope p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Email</div>
                <div className="text-gray-500">{profileData?.email}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <i className="fa-solid fa-mobile p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Phone Number</div>
                <div className="text-gray-500">{profileData?.mobile}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <i className="fa-solid fa-calendar-days p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Date of Birth</div>
                <div className="text-gray-500">{profileData?.dob}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <i className="fa-solid fa-person p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Gender</div>
                <div className="text-gray-500">{profileData?.gender}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <i className="fa-solid fa-truck-fast p-4  bg-gray-100 rounded-md"></i>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold">Shipping Address</div>
                <div className="text-gray-500">
                  {profileData?.address || "---"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
