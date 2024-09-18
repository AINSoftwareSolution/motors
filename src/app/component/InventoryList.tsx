"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image  from "next/image";

import { Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,} from "../utilis/Images";

const InventoryList = () => {
  const inventoryItems: string | any[] = [
    { id: 1, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image1 },
    { id: 2, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image2 },
    { id: 3, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image3 },
    { id: 4, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image4 },
    { id: 5, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image5 },
    { id: 6, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image6 },
    { id: 7, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image7 },
    { id: 8, title: "Car Name 2016", price: "$69,900", location: "Atlanta, GA", imgSrc: Image8 },
  ];

 
  return (
    <div className=" bg-white dark:bg-gray-900 overflow-hidden">
       <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-12 mt-4 mb-4 text-center">
      <h2 className="text-black dark:text-white text-4xl font-bold mt-5">Inventory</h2>
      <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
     
      <div className="mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white dark:bg-gray-900 overflow-hidden">

          <ul className="grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {inventoryItems.map((item, index) => (
              <li
                key={index}
                className="item bg-white border rounded-lg shadow-md"
              >
                <div className="innerad p-4">
                  <h3 className="text-lg font-semibold">
                    <Link
                      href="detail.html"
                      className="text-blue-600 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <div className="price text-gray-800 mt-2">{item.price}</div>
                  <div className="location text-gray-500 flex items-center mt-1">
                    <i
                      className="fa fa-map-marker text-red-500 mr-1"
                      aria-hidden="true"
                    ></i>{" "}
                    {item.location}
                  </div>
                </div>
                <div className="adimg relative">
                  <div className="ribbon_3 absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    <span>Featured</span>
                  </div>
                  <Link href="#">
                    <Image
                      src={item.imgSrc}
                      alt=""
                      className="w-full h-auto object-cover rounded-lg "
                    />
                  </Link>
                </div>
                <div className="innerad p-4 text-center">
                <Link href="/vehicle.html" className="relative font-sans font-normal inline-flex items-center justify-center leading-5 no-underline w-full space-x-1 bg-gray-100 hover:bg-gray-800 text-gray-500 hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 h-10 px-5 py-3 text-sm tw-accessibility transition-all duration-300"> View Details</Link>

                </div>
              </li>
            ))}
          </ul>
          </div>
       </div>
       </div>
    
  );
};

export default InventoryList;
