import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import StarRating from "./StarRating";
import { GetData, PostData } from "../Utility/API";
import Recommendations from "./Recommendation/Recommendation";
import Reviews from "./Reviews/Reviews";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import useLoader from "../Utility/CustomHooks/useLoader";
import FAQs from "./FAQs/FAQs";
export default function ProductDetails() {
  const [bigImgToShow, setBigImgToShow] = useState();
  const [defaultselectedTab, setDefaultSelectedTab] = useState("Product Details");
  const [productDetails, setProductDetails] = useState({});
  const [selectedSize, setSelectedSize] = useState();
  const [count, setCount] = useState(1);
  const [query] = useSearchParams();
  const [isAdded, setIsAdded] = useState(false);
  const { showLoader } = useLoader();
  const id = query.get("id");

  const [detailsAndReviewsTabs, setDetailsAndReviewsTabs] = useState([
    "Product Details",
    "Reviews",
    "FAQs",
  ]);

  const changeImg = (ele, index) => {
    setBigImgToShow(ele);
  };
  useEffect(() => {
    showLoader(true);
    GetData("get_product_details", { product_id: id }, updateProductDetailsHandler);
  }, []);

  const updateProductDetailsHandler = (res) => {
    showLoader(false);
    setProductDetails(res.data.results);
    setBigImgToShow(res.data.results.front_image);
  };

  const selectedSizeHandler = (ele) => {
    setSelectedSize(ele.size);
  };

  const toggleDetailsAndReviewsTabs = (element) => {
    setDefaultSelectedTab(element);
  };

  const updateWishlist = () => {
    showLoader(true);
    PostData(
      "update_wishlist",
      { product_id: id, wishlist_status: !productDetails?.is_wishlist },
      updateWishlistHandler
    );
  };
  const updateWishlistHandler = (response) => {
    showLoader(false);
    if (response.data.success) {
      setProductDetails({
        ...productDetails,
        ["is_wishlist"]: !productDetails?.is_wishlist,
      });
    }
  };
  const decrementHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementHandler = () => {
    setCount(count + 1);
  };

  const addToCartHandler = () => {
    if (!selectedSize) {
      alert("Please select size first");
      return;
    }
    PostData(
      "add_to_cart",
      {
        product_id: productDetails._id,
        size: selectedSize,
        quantity: count,
      },
      updateAddToCartHandler
    );
  };
  const updateAddToCartHandler = (response) => {
    if (response.data.success) {
      setIsAdded(true);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-8 px-4 py-6 lg:px-0 max-w-screen-xl m-auto min-h-screen">
        <div className="flex gap-2 items-center ">
          <a href="/">Home</a> <img className="w-2 h-fit" src={arrow} /> Product{" "}
        </div>
        <div className="flex gap-4 w-full  m-auto lg:flex-row flex-col">
          <div className="productImgLeftContainer w-full lg:w-1/2">
            <div className="flex gap-4">
              <div className="smImgsContainer flex flex-col gap-2 w-44">
                {productDetails?.images?.slice(0, 3)?.map((ele, index) => {
                  return (
                    <img
                      onClick={() => changeImg(ele, index)}
                      className={`productLeftImgs rounded-2xl cursor-pointer`}
                      src={ele}
                    />
                  );
                })}
              </div>
              <div className="productRightImgs">
                <img className=" rounded-xl" src={bigImgToShow} alt="" />
              </div>
            </div>
          </div>
          <div className="detailsRIghtContainer w-full lg:w-1/2 lg:ml-4 flex flex-col gap-4">
            <div className="text-4xl font-extrabold">{productDetails?.name?.toUpperCase()}</div>
            <div className="product-card flex gap-4 items-center">
              <StarRating rating={productDetails?.rating} />
              <div className="font-semibold text-base">{productDetails?.rating}/5</div>
            </div>
            <div className="priceAndDiscount ">
              <div className="text-2xl font-bold flex items-center  gap-4 ">
                ${productDetails?.discounted_price}
                <span className="text-gray-400 line-through">${productDetails?.price}</span>
                <div className=" discountPercentage bg-red-200 text-red-500 font-normal text-sm  text-gray-800 bg-rose-500 p-2 py-1 rounded-full">
                  {100 -
                    ((productDetails?.discounted_price / productDetails?.price) * 100)?.toFixed(0)}
                  %
                </div>
              </div>
            </div>
            <div className=" text-gray-400">{productDetails?.product_description}</div>

            <div className="sizeContainer flex flex-col gap-4">
              <div className="text-gray-500">Choose Size</div>
              <div className="flex gap-4">
                {productDetails?.available_quantity?.map((ele) => {
                  return (
                    <span
                      onClick={() => selectedSizeHandler(ele)}
                      className={`bg-gray-300 px-5 cursor-pointer py-2 w-fit rounded-3xl text-sm ${ele.size === selectedSize && "text-white bg-gray-600 font-semibold"
                        }`}
                    >
                      {ele?.size}
                    </span>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="quantityCounterAddToCartBtn flex gap-2 items-center">
              <div className="quantityCounter bg-gray-200 rounded-3xl px-2 py-2 w-fit">
                <div className="flex gap-6 items-center">
                  <button className="text-lg px-4" onClick={decrementHandler}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <div className="text-lg min-w-[25px] text-center">{count}</div>
                  <button className="text-lg px-4" onClick={incrementHandler}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <button
                className="bg-gray-900 min-w-[150px] w-1/2 text-center py-2 rounded-3xl text-white"
                onClick={addToCartHandler}
              >
                {!isAdded ? (
                  "Add To Cart"
                ) : (
                  <>
                    <i class="fa-regular fa-circle-check mr-1"></i>Added to cart
                  </>
                )}
              </button>
            </div>

            <div className="wishListBtns flex gap-2">
              <button className="bg-gray-900 px-12 py-2 rounded-3xl text-white">
                <Link to={"/wishlist"}>My Wishlist</Link>
              </button>
              <button
                className={`bg-gray-200 min-w-[150px] w-1/2 py-2 rounded-3xl ${productDetails.is_wishlist && "text-white bg-gray-900"
                  }`}
                onClick={updateWishlist}
              >
                {productDetails.is_wishlist ? "Added to Wishlist" : "Add To Wishlist"}
              </button>
            </div>
          </div>
        </div>
        <div className="detailsAndReviewsContainer pb-2">
          <div className="grid grid-cols-3 justify-between max-w-screen-xl m-auto">
            {detailsAndReviewsTabs?.map((ele, index) => {
              return (
                <div
                  className={`cursor-pointer py-3 px-6 text-center w-full border-b-2 text-base ${defaultselectedTab == ele && "border-b-[3px] border-black text-black"
                    }`}
                  key={index}
                  onClick={() => toggleDetailsAndReviewsTabs(ele)}
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
                  <span>{productDetails?.product_details?.brand}</span>
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

            {defaultselectedTab == "Reviews" && productDetails?._id && (
              <Reviews productDetails={productDetails} />
            )}
            {defaultselectedTab == "FAQs" && productDetails?._id && (
              <FAQs />
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="font-extrabold text-3xl lg:text-4xl text-center">YOU MIGHT ALSO LIKE</div>
          {productDetails?._id && <Recommendations productId={productDetails?._id} />}
        </div>
      </div>
    </>
  );
}
