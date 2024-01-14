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
    name: "Moda Rapido",
    gender: "Men",
    currency: "₹",
    currency_code: "INR",
    price: 2499,
    discounted_price: 999,
    rating: 4.9,
    product_description: "Men Pure Cotton Spread Collar Elasticated Hem Casual Shirtt",
    front_image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21249956/2023/4/3/23ef434b-ff3d-4daa-a712-91f3af504dbe1680506279577-Moda-Rapido-Men-Shirts-4271680506278960-1.jpg",
    category: "Shirt",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21249956/2023/4/3/7fa2d983-80d1-4fdb-ab86-0d1c14381f611680506279566-Moda-Rapido-Men-Shirts-4271680506278960-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21249956/2023/4/3/5dd79960-f482-4694-8c53-6e4bbf55e9d81680506279529-Moda-Rapido-Men-Shirts-4271680506278960-5.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21249956/2023/4/3/9704765e-e807-4b88-80dc-f3e89a1f06471680506279501-Moda-Rapido-Men-Shirts-4271680506278960-6.jpg",
    ],
    product_details: {
      details:
        "Green solid opaque casual shirt, has a spread collar, button placket, 2 flap pocket, long regular sleeves with elasticated cuff, straight elasticated hem",
      material: "100% Cotton",
      brand: "Moda Rapido",
      care_instructions:
        "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Iron on low heat.",
    },
    variant: { color: "Green", hex: "#1f4647" },
  };

  const [payload, setPayload] = useState({});

  const addProductHandler = () => {
    PostData("add_product", data, updateHandler);
  };
  const updateHandler = () => {};
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 w-full m-auto max-w-screen-xl">
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
