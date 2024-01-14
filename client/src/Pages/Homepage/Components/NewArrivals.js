import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard";
import { GetData } from "../../../Utility/API";

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    GetData("new_arrivals", {}, updateNewArrivalsHandler);
  }, []);

  const updateNewArrivalsHandler = (res) => {
    setNewArrivals(res.data.results);
  };
  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-6 items-center">
      <div className="text-4xl font-bold">New Arrivals</div>
      <div className="w-full flex justify-between gap-6">
        {newArrivals?.map((item) => {
          return (
            <>
              <ProductCard data={item} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrivals;
