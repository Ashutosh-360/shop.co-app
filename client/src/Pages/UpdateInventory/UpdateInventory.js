import React from "react";
import { PostData } from "../../Utility/API";

function UpdateInventory() {
  const inventoryData = {
    product_id: "65955a17a5b582e677890d2e", // Replace with the actual product ID
    available_quantity: [
      {
        size: "S",
        quantity: 5,
      },
      {
        size: "M",
        quantity: 8,
      },
      {
        size: "L",
        quantity: 3,
      },
      {
        size: "XL",
        quantity: 2,
      },
    ],
  };
  const inventoryHandler = () => {
    PostData("update_inventory", inventoryData, updateInventoryHandler);
  };

  const updateInventoryHandler = (res) => {};
  return (
    <button
      onClick={inventoryHandler}
      className="bg-black text-white text-lg rounded p-3"
    >
      Add Inventory
    </button>
  );
}

export default UpdateInventory;
