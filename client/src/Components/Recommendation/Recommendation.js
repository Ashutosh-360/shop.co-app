import React, { useEffect, useState } from "react";
import { GetData } from "../../Utility/API";
// import ProductCard from "../ProductCard";
import Loader from "../Loader";
import SliderComponent from "../Slider/SliderComponent";

export default function Recommendations({ productId }) {
  console.log(productId, "productId");
  const [recommendedDetails, setRecommendedDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(productId, "productId");
    GetData(
      "product_recommendation",
      {
        product_id: productId,
      },
      RecommendedProduct
    );
  }, []);

  const RecommendedProduct = (response) => {
    setIsLoading(false);
    setRecommendedDetails(response.data.results);
    console.log(response.data.results, "first");
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}

      {!isLoading && (
        <div className="w-full">
          <SliderComponent productData={recommendedDetails} />
        </div>
      )}
    </>
  );
}
