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
import plus from "../assets/plus.png"
import substract from "../assets/substract.png"
import Counter from "./Counter/Counter";

export default function ProductDetails() {
  const [selectedImg, setSelectedImg] = useState({ tshirtfront });
  const [bigImgToShow, setBigImgToShow] = useState(tshirtfront);
  const [isSelected, setIsSelected] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [imgToShow, setImgToShow] = useState([]);
  const [rating, setRating] = useState(0);
  const [color,setColor] = useState()
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
 
  const [originalPrice, setOriginalPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const changeImg = (ele,  index)  => {
    setIsSelected(index + 1);
    setBigImgToShow(ele);
  };
  useEffect(() => {
    
    GetData("get_product_details?product_id=6590520bcb1a75b5882b3a89",{},handle)
  }, []);

  const handle = (res) => {
    setProductDetails(res.data.results);
    setImgToShow([res.data.results.images])
    setOriginalPrice(res.data.results.price)
    setDiscountedPrice(res.data.results.discounted_price)
    setColor(res.data.results.variant.color)
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
        <div className="detailsRIghtContainer ml-4 flex flex-col gap-4">
          <div className="productNameContainer text-4xl font-extrabold  pt-20 ">
            {productDetails.name}
          </div>
          <div className="product-card flex gap-4">
            <StarRating rating={productDetails.rating} />
            <span>{productDetails.rating}/5</span>
          </div>
          <div className="priceAndDiscount ">
            <span  className="text-2xl font-bold flex  gap-4 ">${productDetails.price}
            <span className="text-gray-400 line-through">${productDetails.discounted_price}</span>
            <span  className=" discountPercentage bg-red-200  text-red-500 font-normal text-base">{discountPercentage.toFixed(0)}%</span>
            </span>
          </div>
          <div className=" text-gray-400">{productDetails.product_description}</div>
          <hr></hr>
          <div className="colorContainer">
          <div className=" text-gray-500">Select Colors</div>
          <div>{color}</div>
          </div>
          <hr></hr>
          <div className="sizeContainer flex flex-col gap-4">
            <div className="text-gray-500">Choose Size</div>
            <span className="bg-gray-200 px-5 py-2 w-fit rounded-3xl text-gray-500 text-sm">Small</span>
          </div>
          <hr />
          <div className="quantityCounterAddToCartBtn flex gap-2 items-center">
            <div className="quantityCounter bg-gray-200 rounded-3xl px-5 py-2 w-fit">
            <Counter plus={plus} substract={substract}/></div>
            <div className="addToCartBtn"><button className="bg-gray-900 px-24 py-2 rounded-3xl text-white">Add To Cart</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
