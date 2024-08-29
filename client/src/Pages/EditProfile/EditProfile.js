import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import { GetData, PostData } from "../../Utility/API";

export default function EditProfile() {
  const [profileDetails, setProfileDetails] = useState({});
  const [newDetails, setNewDetails] = useState({});

  useEffect(() => {
    GetData("get_profile", {}, getProfileDetails);
  }, []);

  const getProfileDetails = (response) => {
    if (response.data.success) setProfileDetails(response.data.results);
  };

  const updateProfileDetailsHandler = () => {
    PostData("edit_profile", newDetails, afterUpdateProfileDetails);
  };
  const onChangeHandler = (e) => {
    setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
  };
  const afterUpdateProfileDetails = (response) => {
    console.log(response);
  };
  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-4 pt-4">
      <div className="font-bold text-2xl">Settings</div>
      <div className="flex flex-col gap-4 w-full max-w-[600px]">
        <div className="flex flex-col gap-2 py-2">
          <div className="font-semibold text-xl">Account Details</div>
          <div className="flex flex-col gap-2">
            <Input
              heading="Email"
              keyName="email"
              placeholder="Enter your Email"
              defaultValue={profileDetails.email}
              onChange={onChangeHandler}
              disabled={true}
            />

            <Input
              heading="Phone Number"
              keyName="mobile"
              placeholder="Enter your Phone"
              onChange={onChangeHandler}
              value={newDetails?.mobile}
              defaultValue={profileDetails?.mobile}
            />
            <Input
              heading="Date of Birth"
              keyName="dob"
              placeholder="Enter your DOB"
              inputType="date"
              onChange={onChangeHandler}
              value={newDetails?.dob}
              defaultValue={profileDetails?.dob}
            />
            <Input
              heading="Gender"
              keyName="gender"
              placeholder="Enter your gender"
              value={newDetails?.gender}
              defaultValue={profileDetails?.gender}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pb-6">
          <Link to={"/profile"} className="py-2 px-4 bg-gray-200 rounded-md">
            Cancel
          </Link>
          <button
            className="py-2 px-4 bg-black text-white rounded-md"
            onClick={updateProfileDetailsHandler}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
