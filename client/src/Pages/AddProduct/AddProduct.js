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
    name: "Striped Polo Shirt",
    gender: "Men",
    currency: "₹",
    currency_code: "INR",
    price: 1899.25,
    discounted_price: 1499.25,
    rating: 4.4,
    product_description: "A classic striped polo shirt for a casual and sporty look.",
    front_image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11447174/2020/10/6/3fe0f61b-4aa3-4cbd-8575-677a1219d2571601958151537TrackPantsUSPoloAssnDenimCoMenJeansUSPoloAssnDenimCoMenShirt6.jpg",
    category: "Shirt",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11447174/2020/10/6/04dc9529-ec0a-4fec-b91a-56729eb569f01601958151397TrackPantsUSPoloAssnDenimCoMenJeansUSPoloAssnDenimCoMenShirt4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11447174/2020/10/6/239ec464-6133-4c81-8e5e-bc617f1f484e1601958151315TrackPantsUSPoloAssnDenimCoMenJeansUSPoloAssnDenimCoMenShirt3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11447174/2020/10/6/319a7ae5-967b-4fbf-aba4-94313be053711601958151236TrackPantsUSPoloAssnDenimCoMenJeansUSPoloAssnDenimCoMenShirt2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11447174/2020/10/6/09143263-d17c-453d-8eeb-6b54619a30261601958151153TrackPantsUSPoloAssnDenimCoMenJeansUSPoloAssnDenimCoMenShirt1.jpg",
    ],
    product_details: {
      material: "Cotton",
      brand: "FashionCo",
      care_instructions:
        "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Iron on low heat.",
    },
    variant: { color: "Blue", hex: "#0000FF" },
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
          <FormParser data={productSchema} parserPayload={payload} setParserPayload={setPayload} />
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
