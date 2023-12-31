import React, { useEffect, useState } from "react";
import tshirt from "../assets/tshirts.png";
import tshirtback from "../assets/tshirtback.png";
import tshirtfront from "../assets/tshirtfront.png";
import tshirtmen from "../assets/tshirtmen.png";
import arrow from "../assets/arrow.png";
import Star from "../assets/Star.png";
import halfstar from "../assets/halfstar.png";
import Header from "./Header";
import style from "./ProductDetails.css";
import StarRating from "./StarRating";
import { GetData } from "../Utility/API";

export default function ProductDetails() {
  const [selectedImg, setSelectedImg] = useState({ tshirtfront });
  const [bigImgToShow, setBigImgToShow] = useState(tshirtfront);
  const [isSelected, setIsSelected] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [imgToShow, setImgToShow] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  let productData = {
    _id: "6590520bcb1a75b5882b3a89",
    name: "STRIPPED POLO SHIRT",
    gender: "Men",
    currency: "₹",
    currency_code: "INR",
    price: 1899.25,
    discounted_price: 1499.25,
    rating: 4.4,
    product_description:
      "A classic striped polo shirt for a casual and sporty look.",
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
      _id: "6590520bcb1a75b5882b3a8a",
    },
    variant: { color: "Blue", hex: "#0000FF", _id: "6590520bcb1a75b5882b3a8b" },
    createdAt: "2023-12-30T17:23:23.799Z",
    updatedAt: "2023-12-30T17:23:23.799Z",
    __v: 0,
  };
  const [originalPrice, setOriginalPrice] = useState(productData.price);
  const [discountedPrice, setDiscountedPrice] = useState(productData.discounted_price);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const changeImg = (ele,  index)  => {
    setIsSelected(index + 1);
    setBigImgToShow(ele);
  };
  useEffect(() => {
    setProductDetails(productData);
    setImgToShow([productData.images])
    GetData("get_product_details?product_id=6590520bcb1a75b5882b3a89",{},handle)
  }, []);

  const handle = (res) => {
    console.log(res);
    setProductDetails(res.data);
  };
  useEffect(() => {
    calculateDiscountPercentage();
  }, [originalPrice, discountedPrice]);

  const calculateDiscountPercentage = () => {
    const percentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    setDiscountPercentage(percentage);
  };
  return (
    <>
      <div className="productDetailsWrapper flex gap-4 w-full max-w-screen-xl m-auto ">
        <div className="productImgLeftContainer w-1/2">
          <div className="navigationBar  py-6 flex gap-2 items-center">
            Home <img className="w-2 h-fit" src={arrow} /> Shop{" "}
            <img className="w-2 h-fit" src={arrow} /> Men{" "}
            <img className="w-2 h-fit" src={arrow} /> T-shirts{" "}
          </div>

          <div className="flex gap-6">
            <div className="smImgsContainer flex flex-col gap-8">
              {imgToShow.map((ele,  index) => {
                console.log(ele,"ele")
            
                
                return (
                  <img
                    onClick={() => changeImg(ele, index)}
                    className={`productLeftImgs rounded-2xl w-36`}
                    src={ele}
                  />
                );
          
              })}
            </div>
            <div>
              <img className="productRightImgs rounded-xl" src={productDetails.front_image} />
            </div>
          </div>
        </div>
        <div className="detailsRIghtContainer flex flex-col gap-4">
          <div className="productNameContainer text-4xl font-extrabold  pt-20 pl-3">
            {productDetails.name}
          </div>
          <div className="product-card ml-4  flex gap-4">
            <StarRating rating={productDetails.rating} />
            <span>{productDetails.rating}/5</span>
          </div>
          <div className="priceAndDiscount ">
            <span  className="text-2xl font-bold ml-4 flex  gap-4 ">${productDetails.price}
            <span className="text-gray-400 line-through">${productDetails.discounted_price}</span>
            <span  className=" discountPercentage bg-red-200  text-red-500 font-normal text-base">{discountPercentage.toFixed(0)}%</span>
            </span>
          </div>
          <div className="ml-4 text-gray-400">{productDetails.product_description}</div>
          <hr></hr>
          <div className="colorContainer">
          <div className="ml-4 text-gray-500">Select Colors</div>
          <div></div>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}
