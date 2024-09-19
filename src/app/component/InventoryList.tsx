import React from "react";
import InventryCard from "./InventoryCard";
import { inventoryItems } from "../utilis/data";

const InventoryList = () => {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-12 mt-4 mb-4 text-center">
        <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
          Inventory
        </h2>
        <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-4 overflow-hidden">
          {inventoryItems.map((item) => (
            <InventryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
