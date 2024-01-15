import React, { useEffect, useState } from "react";
import { GetData } from "../../Utility/API";
import ProductCard from "../ProductCard";

export default function Recommendations({ productId }) {
  console.log(productId, "productId");
  const [recommendedDetails, setRecommendedDetails] = useState([]);
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
    setRecommendedDetails([...response.data.results]);
    console.log(response.data, "first");
  };

  return recommendedDetails?.map((item) => {
    return (
      <>
        <ProductCard data={item} />
      </>
    );
  });
}
