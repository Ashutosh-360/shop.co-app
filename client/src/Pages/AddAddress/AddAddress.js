import React from "react";
import Input from "../../Components/Input/Input";

const AddAddress = () => {
  const onChangeHandler = () => {};
  return (
    <div className="flex flex-col gap-4 max-w-screen-xl m-auto py-8">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">User Details</div>
        <Input
          heading="Name"
          keyName="name"
          placeholder="Enter your Name"
          onChange={onChangeHandler}
        />
        <Input
          heading="Mobile"
          keyName="mobile"
          placeholder="Enter your Mobile"
          onChange={onChangeHandler}
        />
      </div>

      <hr />
      <div className="flex flex-col gap-2">
        <div className="font-semibold text-lg">Location Details</div>

        <Input
          heading="Pincode"
          keyName="pincode"
          placeholder="Enter your pincode"
          onChange={onChangeHandler}
        />
        <Input
          heading="Address"
          keyName="addressline"
          placeholder="Enter your Address"
          onChange={onChangeHandler}
        />
        <Input
          heading="Country"
          keyName="country"
          placeholder="Enter your Country"
          onChange={onChangeHandler}
        />
        <Input
          heading="State"
          keyName="state"
          placeholder="Enter your state"
          onChange={onChangeHandler}
        />
        <Input
          heading="City"
          keyName="city"
          placeholder="Enter your city"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default AddAddress;
