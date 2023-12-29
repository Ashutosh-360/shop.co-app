import React, { useState } from "react";
import FormParser from "../../Components/FormParser/FormParser";
import Header from "../../Components/Header";

function AddProduct() {
  const [productSchema] = useState([
    {
      label: "Enter Product Name",
      name: "name",
      inputType: "text",
      width: "100",
    },
    {
      label: "Select Gender",
      name: "gender",
      inputType: "radio",
      options: [
        { title: "Men", value: "Men" },
        { title: "Women", value: "Women" },
      ],
      width: "100",
    },
    {
      label: "Select Currency",
      name: "currency",
      inputType: "select",
      options: [
        { title: "Rupees ₹", value: "₹" },
        { title: "Dollar $", value: "$" },
      ],
      width: "100",
    },
    {
      label: "Select Currency Code",
      name: "currency_code",
      inputType: "select",
      options: [{ title: "INR", value: "INR" }],
      width: "100",
    },
  ]);

  const addProductHandler = (payload) => {
    console.log(payload);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 w-full m-auto max-w-screen-xl">
        <div className="font-semibold text-xl">Add Product</div>

        <div className="grid grid-cols-2 gap-4">
          <FormParser data={productSchema} callback={addProductHandler} />
        </div>
        <div className="w-full flex justify-center">
          <button className="p-3 rounded bg-black text-white font-semibold text-sm m-auto">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
