import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import Header from "./Header";
import StarRating from "./StarRating";
import { GetData } from "../Utility/API";
import plus from "../assets/plus.png";
import substract from "../assets/substract.png";
import Counter from "./Counter/Counter";
import Recommendations from "./Recommendation/Recommendation";
import Footer from "./Footer";
import Reviews from "./Reviews/Reviews";
import style from "./ProductDetails.css";
import AddToCart from "./AddToCart/AddToCart";
export default function ProductDetails() {
  const [bigImgToShow, setBigImgToShow] = useState();
  const [defaultselectedTab, setDefaultSelectedTab] = useState("Product Details");
  const [isSelected, setIsSelected] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [imgToShow, setImgToShow] = useState([]);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState();
  const [size, setSize] = useState([]);
  const [isSelectedSize, setIsSelectedSize] = useState();
  const [formattedDate, setFormattedDate] = useState("");
  const [count, setCount] = useState(0);

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
    GetData("get_product_details", { product_id: "65944e9710c2a53fa96ee526" }, handleOtherStates);
  }, []);

  const handleOtherStates = (res) => {
    setProductDetails(res.data.results);
    setImgToShow([...res.data.results.images]);
    setBigImgToShow(res.data.results.front_image);
    setOriginalPrice(res.data.results.price);
    setDiscountedPrice(res.data.results.discounted_price);
    setColor(res.data.results.variant.color);
    setSize([...res.data.results.available_quantity]);
  };
  useEffect(() => {
    calculateDiscountPercentage();
  }, [originalPrice, discountedPrice]);

  const calculateDiscountPercentage = () => {
    const percentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    setDiscountPercentage(percentage);
  };

  const selectedSize = (ele) => {
    setIsSelectedSize(ele.size);
  };

  const toggleDetailsAndReviewsTabs = (element) => {
    setDefaultSelectedTab(element);
  };

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
            <div className=" text-gray-400">{productDetails.product_description}</div>
            <hr></hr>
            <div className="colorContainer flex flex-col gap-4">
              <div className=" text-gray-500">Select Colors</div>
              <div className="w-6 rounded-full h-6" style={{ backgroundColor: color }}></div>
            </div>
            <hr></hr>
            <div className="sizeContainer flex flex-col gap-4">
              <div className="text-gray-500">Choose Size</div>
              <div className="flex gap-4">
                {size?.map((ele) => {
                  return (
                    <span
                      onClick={() => selectedSize(ele)}
                      className={`${
                        ele.quantity > 0 ? "bg-gray-500" : "disableSize"
                      } ${
                        isSelectedSize == ele.size ? "selectedSize" : "newSize"
                      }  px-5 cursor-pointer  py-2 w-fit rounded-3xl text-s`}
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
                  count={count}
                  setCount={setCount}
                  substract={substract}
                  quantity={size}
                  isSelectedSize={isSelectedSize}
                />
              </div>
              <div className="addToCartBtn">
                {console.log(
                  productDetails,
                  "kkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
                  count
                )}
                {!!productDetails._id &&  (
                  <AddToCart
                    productId={productDetails}
                    selectedSize={isSelectedSize}
                    quantity={count}
                  />
                )}
              </div>
            </div>
            <div className="wishListBtns flex gap-2">
              <button className="bg-gray-900 px-12 py-2 rounded-3xl text-white">My Wishlist</button>
              <button className="bg-gray-200 px-20 py-2 rounded-3xl">Add To Wishlist</button>
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
                  <span className="w-96">{productDetails?.product_details?.care_instructions}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">Material: </span>
                  <span>{productDetails?.product_details?.material}</span>
                </div>
              </>
            )}

            {defaultselectedTab == "Reviews" && !!productDetails._id && (
              <Reviews productId={productDetails} />
            )}
          </div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="font-extrabold text-5xl ">YOU MIGHT ALSO LIKE</div>
          <div className="flex gap-16">
            {!!productDetails._id && <Recommendations productId={productDetails._id} />}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
