import React from "react";
import casuals from "../../assets/casuals.png";
import formals from "../../assets/formal.png";
import party from "../../assets/party.png";
import gym from "../../assets/gym.png";

export default function BrowseByCategory() {
  return (
    <>
      <div className="max-w-screen-xl m-auto bg-gray-200 flex flex-col justify-center rounded-3xl gap-6 p-8">
        <span className="text-4xl font-bold text-center">
          BROWSE BY DRESS STYLE
        </span>
        <div className="flex justify-center gap-2 flex-wrap">
          <img src={casuals} />
          <img src={formals} />
        </div>
        <div className="flex justify-center gap-2 flex-wrap">
          <img src={party} />
          <img src={gym} />
        </div>
      </div>
    </>
  );
}
