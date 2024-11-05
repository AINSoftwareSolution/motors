'use client'
import { Button, InventoryCard, Loader } from "@/app/component";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BrandCards = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading status
  const params = useParams()


  useEffect(() => {
    const fetchInventoryItems = async () => {
      try {
        const response = await fetch(`/api/car/make/${params?.name}`); // Replace with your API endpoint
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



  if (loading) {
    return <Loader />
  }

  return (
    <div className="bg-gray-200 dark:bg-gray-900 overflow-hidden" >
      <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4 text-center">
        {
          inventoryItems.length ?

            <>
              <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
                Inventory
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-4 overflow-hidden">
                {inventoryItems?.map((item: any) => (
                  <InventoryCard key={item?.id} item={item} />
                ))
                }
              </div>
            </> :
            <div className="mt-12 py-12">
              <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold my-5">
              Sorry, we couldn&apos;t find any cars for {params.name}
              </h2>
              <Button title={"Discover More Brands"} link={"/#brand"} />

            </div>
        }
      </div>
    </div>
  );
};

export default BrandCards;
