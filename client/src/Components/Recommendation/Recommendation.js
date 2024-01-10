import React, { useEffect, useState } from "react";
import { GetData } from "../../Utility/API";

export default function Recommendations({productId}) {
  const [recommendedDetails,setRecommendedDetails] = useState()
  useEffect(() => {
    console.log(productId,"productId")
    GetData(
      "product_recommendation",
      {
        product_id: "6590520bcb1a75b5882b3a89",
      },
      RecommendedProduct
    );
  }, []);

  function RecommendedProduct(response) {
    setRecommendedDetails(response.data)
    console.log(response.data, "first");
    
    recommendedDetails.images.map((elem)=>{
      console.log(elem,"imgssssssssssss")

    


    return(
      <div className="recommendedProductCards">
        <div className="recommendedCard">
          {/* <img src={}/> */}
        </div>
        
      </div>
    )
  })
    
  }
}
