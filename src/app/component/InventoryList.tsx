'use client'
import React, { useEffect, useMemo, useState } from "react";
import { Loader , Button, InventoryCard} from ".";

const InventoryList = ({ isHome }: { isHome?: boolean }) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    const fetchInventoryItems = async () => {
      try {
        const response = await fetch('/api/car'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInventoryItems(data); // Assuming data is an array of inventory items
      } catch (err: any) {
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchInventoryItems();
  }, []);

  const data = useMemo(() => {
    return isHome ? inventoryItems.slice(0, 8) : inventoryItems;
  }, [inventoryItems, isHome]);

  if (loading) {
    return  <Loader />
  }

  return (
    <div className="bg-gray-200 dark:bg-gray-900 overflow-hidden" id="inventory">
      <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4 text-center">
        <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
          Inventory
        </h2>
        {/* <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-4 overflow-hidden">
          {data?.map((item: any) => (
            <InventoryCard key={item?.id} item={item} />
          ))}
        </div>

        {
          (isHome && data.length >= 8) &&
          <div>
            <Button title="Visit More" link="/inventory" />
          </div>
        }
      </div>
    </div>
  );
};

export default InventoryList;
