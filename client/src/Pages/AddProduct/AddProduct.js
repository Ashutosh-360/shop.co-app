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
    name: "HERE&NOW",
    gender: "Men",
    currency: "₹",
    currency_code: "INR",
    price: 1899,
    discounted_price: 699,
    rating: 4.5,
    product_description: "Men Slim Fit Printed Casual Shirt",
    front_image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23370048/2023/5/24/b6dddc4d-e79c-41aa-a140-c542534b74c51684909962289BewakoofMenBlackTypographyPrintedHoodedAppliqueT-shirt5.jpg",
    category: "Casu",
    images: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23370048/2023/5/24/d9ca52e1-17cc-409f-9029-b767f81d762d1684909962279BewakoofMenBlackTypographyPrintedHoodedAppliqueT-shirt3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23370048/2023/5/24/88f34f9e-562e-4d72-92c9-64237d8c032c1684909962329BewakoofMenBlackTypographyPrintedHoodedAppliqueT-shirt1.jpg",
    ],
    product_details: {
      material: "Knitted cotton fabric",
      brand: "Bewakoof",
      care_instructions:
        "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Iron on low heat.",
    },
    variant: { color: "Black", hex: "##000000" },
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
