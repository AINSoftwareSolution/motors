import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const InventoryCard = ({ item }: { item: any }) => {
  return (
    <div className="relative flex flex-col items-center justify-center group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform hover:scale-105">
      <Link href={`/car/${item.id}`}>
        <div className="relative w-full h-48 overflow-hidden rounded-md">
          <Image
            src={item.imgSrc}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            width={400}
            height={300}
          />
        </div>
      </Link>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          <Link href="detail.html" className="text-blue-600 hover:underline">
            {item.title}
          </Link>
        </h3>
        <div className="price text-gray-800 dark:text-gray-300 mt-2">
          {item.price}
        </div>
        <div className="location text-gray-500 flex items-center justify-center mt-1">
          <i className="fa fa-map-marker text-red-500 mr-1" aria-hidden="true"></i>
          {item.location}
        </div>
      </div>
      <Link
        href={`/car/${item.id}`}
        className="relative font-sans font-normal inline-flex items-center justify-center leading-5 no-underline w-full bg-gray-100 hover:bg-gray-800 text-gray-500 hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 h-10 px-5 py-3 text-sm transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default InventoryCard;
