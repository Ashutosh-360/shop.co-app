import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import Star from "../assets/Star.png";
import halfstar from "../assets/halfstar.png";
import Header from "./Header";
import style from "./ProductDetails.css";
import StarRating from "./StarRating";
import { GetData } from "../Utility/API";
import plus from "../assets/plus.png";
import substract from "../assets/substract.png";
import Counter from "./Counter/Counter";
import verified from "../assets/verified.png"
import Recommendations from "./Recommendation/Recommendation";

export default function ProductDetails() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [bigImgToShow, setBigImgToShow] = useState();
  const [defaultselectedTab, setDefaultSelectedTab] =
    useState("Product Details");
  const [isSelected, setIsSelected] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [imgToShow, setImgToShow] = useState([]);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState();
  const [size, setSize] = useState([]);
  const [isSelectedSize, setIsSelectedSize] = useState();
  const [formattedDate, setFormattedDate] = useState("");

  const [detailsAndReviewsTabs, setDetailsAndReviewsTabs] = useState([
    "Product Details",
    "Reviews",
    "FAQ's",
  ]);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const [originalPrice, setOriginalPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const changeImg = (ele, index) => {
    setIsSelected(index + 1);
    setBigImgToShow(ele);
  };
  useEffect(() => {
    GetData(
      "get_product_details",
      { product_id: "6590520bcb1a75b5882b3a89" },
      handleOtherStates
    );
  }, []);

  const handleOtherStates = (res) => {
    setProductDetails(res.data.results);
    setImgToShow([...res.data.results.images]);
    setBigImgToShow(res.data.results.front_image);
    setOriginalPrice(res.data.results.price);
    setDiscountedPrice(res.data.results.discounted_price);
    setColor(res.data.results.variant.color);
    setSize([...res.data.results.available_quantity]);
    console.log(productDetails._id,"iddddddddddddddddddddd")
  };
  useEffect(() => {
    calculateDiscountPercentage();
  }, [originalPrice, discountedPrice]);

  const calculateDiscountPercentage = () => {
    const percentage =
      ((originalPrice - discountedPrice) / originalPrice) * 100;
    setDiscountPercentage(percentage);
  };

  const selectedSize = (ele) => {
    setIsSelectedSize(ele.size);
  };
  var timestamp;
  const toggleDetailsAndReviewsTabs = (element) => {
    setDefaultSelectedTab(element);
 
  };

  useEffect(() => {
    productDetails?.reviews?.map((elem) => {
      timestamp = elem.updatedAt;
    });
    const date = new Date(timestamp);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    const formattedDateResult = `${month} ${day}, ${year}`;

    setFormattedDate(formattedDateResult);
  }, [timestamp]);

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="productDetailsWrapper flex gap-4 w-full max-w-screen-xl m-auto ">
          <div className="productImgLeftContainer w-1/2">
            <div className="navigationBar  py-6 flex gap-2 items-center">
              Home <img className="w-2 h-fit" src={arrow} /> Shop{" "}
              <img className="w-2 h-fit" src={arrow} /> Men{" "}
              <img className="w-2 h-fit" src={arrow} /> T-shirts{" "}
            </div>

            <div className="flex gap-4">
              <div className="smImgsContainer flex flex-col gap-2 w-40">
                {imgToShow.slice(0, 3).map((ele, index) => {
                  return (
                    <img
                      onClick={() => changeImg(ele, index)}
                      className={`productLeftImgs rounded-2xl `}
                      src={ele}
                    />
                  );
                })}
              </div>
              <div className="productRightImgs">
                <img className=" rounded-xl" src={bigImgToShow} />
              </div>
            </div>
          </div>
          <div className="detailsRIghtContainer w-1/2 ml-4 flex flex-col gap-6">
            <div className="productNameContainer text-4xl font-extrabold  pt-20 ">
              {productDetails.name?.toUpperCase()}
            </div>
            <div className="product-card flex gap-4">
              <StarRating rating={productDetails.rating} />
              <span>{productDetails.rating}/5</span>
            </div>
            <div className="priceAndDiscount ">
              <span className="text-2xl font-bold flex  gap-4 ">
                ${productDetails.price}
                <span className="text-gray-400 line-through">
                  ${productDetails.discounted_price}
                </span>
                <span className=" discountPercentage bg-red-200  text-red-500 font-normal text-base">
                  {discountPercentage.toFixed(0)}%
                </span>
              </span>
            </div>
            <div className=" text-gray-400">
              {productDetails.product_description}
            </div>
            <hr></hr>
            <div className="colorContainer flex flex-col gap-4">
              <div className=" text-gray-500">Select Colors</div>
              <div
                className="w-6 rounded-full h-6"
                style={{ backgroundColor: color }}
              ></div>
            </div>
            <hr></hr>
            <div className="sizeContainer flex flex-col gap-4">
              <div className="text-gray-500">Choose Size</div>
              <div className="flex gap-4">
                {size?.map((ele) => {
                  return (
                    <span
                      onClick={() => selectedSize(ele)}
                      className={`${ele.quantity > 0 ? "" : "disableSize"} ${
                        isSelectedSize == ele.size ? "newSize" : ""
                      } selectedSize px-5 cursor-pointer  py-2 w-fit rounded-3xl text-s`}
                    >
                      {ele.size}
                    </span>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="quantityCounterAddToCartBtn flex gap-2 items-center">
              <div className="quantityCounter bg-gray-200 rounded-3xl px-10 py-2 w-fit">
                <Counter
                  plus={plus}
                  substract={substract}
                  quantity={size}
                  isSelectedSize={isSelectedSize}
                />
              </div>
              <div className="addToCartBtn">
                <button className="bg-gray-900 px-24 py-2 rounded-3xl text-white">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="wishListBtns flex gap-2">
              <button className="bg-gray-900 px-12 py-2 rounded-3xl text-white">
                My Wishlist
              </button>
              <button className="bg-gray-200 px-20 py-2 rounded-3xl">
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="detailsAndReviewsContainer pb-2">
          <div className="flex justify-between max-w-screen-xl m-auto">
            {detailsAndReviewsTabs.map((ele, index) => {
              return (
                <div
                  key={index}
                  onClick={() => toggleDetailsAndReviewsTabs(ele)}
                  style={{
                    cursor: "pointer",
                    fontWeight: defaultselectedTab === ele ? "bold" : "normal",
                    marginRight: "10px",
                  }}
                >
                  {ele}
                </div>
              );
            })}
          </div>
          <div className="detailsWrapper pt-3 max-w-screen-xl m-auto flex flex-col gap-4">
            {defaultselectedTab == "Product Details" && (
              <>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold ">Brand: </span>
                  <span>{productDetails.product_details?.brand}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">Care Instructions: </span>
                  <span className="w-96">
                    {productDetails?.product_details?.care_instructions}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">Material: </span>
                  <span>{productDetails?.product_details?.material}</span>
                </div>
              </>
            )}

       
            {defaultselectedTab == "Reviews" && (
              <>
                <span>All Reviews</span>
                <div className="reviewsWrapper grid grid-cols-2 gap-6">
                {productDetails?.reviews?.map((elem) => {
                  return (
                    <div className="reviewCard border rounded-lg flex flex-col gap-2 p-4">
                      <span className="reviewRating">
                        <StarRating rating={elem.rating} />
                      </span>
                      
                      <span className="font-semibold flex gap-2 items-center">{elem.reviewerName}<img src={verified}/></span>
                      <span className="">{elem.comment}</span>
                      <span>Posted on {formattedDate}</span>
                    </div>
                  );
                })}
                </div>
              </>
            )}
          </div>
        </div>
        <hr />
      </div>
      <div className="font-extrabold text-xl">YOU MIGHT ALSO LIKE</div>
      <div>{productDetails && <Recommendations productId={productDetails._id}/>}</div>
    </>
  );
}
