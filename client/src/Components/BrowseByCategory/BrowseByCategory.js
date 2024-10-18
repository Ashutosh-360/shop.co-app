import React from "react";
import casuals from "../../assets/casuals.png";
import formals from "../../assets/formal.png";
import party from "../../assets/party.png";
import gym from "../../assets/gym.png";
import { Link } from "react-router-dom";

export default function BrowseByCategory() {
  return (
    <>
      <div className="bg-gray-200 flex flex-col justify-center rounded-3xl gap-6 p-8">
        <span className="text-4xl font-bold text-center">
          BROWSE BY DRESS STYLE
        </span>
        <div className="flex justify-center gap-2 flex-wrap">
          <Link to={"/search_product"}>
            <img src={casuals} />
          </Link>
          <Link to={"/search_product"}>
            <img src={formals} />
          </Link>
        </div>
        <div className="flex justify-center gap-2 flex-wrap">
          <Link to={"/search_product"}>

            <img src={party} />
          </Link>
          <Link to={"/search_product"}>

            <img src={gym} />
          </Link>
        </div>
      </div>
    </>
  );
}
