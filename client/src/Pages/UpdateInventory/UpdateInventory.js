import React from "react";
import { PostData } from "../../Utility/API";

function UpdateInventory() {
  const inventoryData = {
    product_id: "6590520bcb1a75b5882b3a89", // Replace with the actual product ID
    available_quantity: [
      {
        size: "S",
        quantity: 10,
      },
      {
        size: "M",
        quantity: 20,
      },
      {
        size: "L",
        quantity: 15,
      },
      {
        size: "XL",
        quantity: 12,
      },
    ],
  };
  const inventoryHandler = () => {
    PostData("update_inventory", inventoryData, updateInventoryHandler);
  };

  const updateInventoryHandler = (res) => {};
  return (
    <button onClick={inventoryHandler} className="bg-black text-white text-lg rounded p-3">
      Add Inventory
    </button>
  );
}

export default UpdateInventory;
