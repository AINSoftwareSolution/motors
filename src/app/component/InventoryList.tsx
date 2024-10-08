import React from "react";
import InventoryCard from "./InventoryCard";
import { inventoryItems } from "../utilis/data";

const InventoryList = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 overflow-hidden" id="inventory">
      <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4  text-center">
        <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
          Inventory
        </h2>
        <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-4 overflow-hidden">
          {inventoryItems.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
