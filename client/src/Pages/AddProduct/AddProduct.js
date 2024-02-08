import React, { useState } from "react";
import FormParser from "../../Components/FormParser/FormParser";
import Header from "../../Components/Header";
import { PostData } from "../../Utility/API";

function AddProduct() {
  const [productSchema] = useState([
    {
      label: "Enter Product Name",
      name: "name",
      inputType: "text",
      width: "100",
      isRequired: true,
    },
    {
      label: "Select Gender",
      name: "gender",
      inputType: "radio",
      options: [
        { title: "Men", value: "Men" },
        { title: "Women", value: "Women" },
      ],
      isRequired: true,

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
      isRequired: true,

      width: "100",
    },
    {
      label: "Select Currency Code",
      name: "currency_code",
      inputType: "select",
      options: [{ title: "INR", value: "INR" }],
      isRequired: true,

      width: "100",
    },
    {
      label: "Enter price",
      name: "price",
      inputType: "text",
      isRequired: true,

      width: "100",
    },
    {
      label: "Enter Discounted price",
      name: "discounted_price",
      inputType: "text",
      isRequired: true,

      width: "100",
    },
    {
      label: "Enter Rating",
      name: "rating",
      inputType: "text",
      isRequired: true,

      width: "100",
    },
    {
      label: "Enter Product description",
      name: "product_description",
      inputType: "text",
      isRequired: true,

      width: "100",
    },
    {
      label: "Enter Front Image",
      name: "front_image",
      inputType: "text",
      isRequired: true,

      width: "100",
    },
    {
      label: "Enter Category",
      name: "category",
      inputType: "select",
      options: [
        { title: "Shirt", value: "Shirt" },
        { title: "Jeans", value: "Jeans" },
      ],
      isRequired: true,

      width: "100",
    },
  ]);

  let data = {
    name: "Mast & Harbour",
    gender: "Men",
    currency: "₹",
    currency_code: "INR",
    price: 2399,
    discounted_price: 999,
    rating: 3.7,
    product_description: "Men Standard Cotton Shacket",
    front_image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24578698/2023/9/19/e9552fcb-8fde-472c-8f65-871d79cc428f1695108703470-Mast--Harbour-Men-Shirts-6801695108703029-1.jpg",
    category: "Shirt",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24578698/2023/9/19/f90a1d3d-682b-4da9-911f-6b56dd643bf41695108703454-Mast--Harbour-Men-Shirts-6801695108703029-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24578698/2023/9/19/9592c465-2576-4dc1-a5e6-a80e06b1f20a1695108703415-Mast--Harbour-Men-Shirts-6801695108703029-4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24578698/2023/9/19/1ee3c841-422b-4636-a656-b2bce51c475e1695108703376-Mast--Harbour-Men-Shirts-6801695108703029-6.jpg",
    ],
    product_details: {
      details:
        "Green solid opaque Casual shirt ,has a spread collar, button placket, 2 flap pocket, long regular sleeves, curved hem",
      material: "100% Cotton",
      brand: "Mast & Harbour",
      care_instructions:
        "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Iron on low heat.",
    },
    variant: { color: "Green", hex: "#3C463B" },
  };

  const [payload, setPayload] = useState({});

  const addProductHandler = () => {
    PostData("add_product", data, updateHandler);
  };
  const updateHandler = () => {};
  return (
    <>
      <div className="flex flex-col gap-2 w-full m-auto max-w-screen-xl py-16">
        <div className="font-semibold text-xl">Add Product</div>
        <div className="grid grid-cols-2 gap-4">
          {/* <FormParser data={productSchema} parserPayload={payload} setParserPayload={setPayload} /> */}
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={addProductHandler}
            className="p-3 rounded bg-black text-white font-semibold text-sm m-auto"
          >
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
