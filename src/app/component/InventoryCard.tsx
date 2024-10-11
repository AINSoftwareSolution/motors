import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const InventoryCard = ({ item }: { item: any }) => {
  return (
    <div className="relative flex flex-col items-center justify-center group bg-white dark:bg-gray-800 p-4 rounded-lg 
    shadow-md transition-transform hover:scale-105">

      <div className="relative w-full h-48 overflow-hidden rounded-md">
        <Image
          src={item?.images[0]}
          alt={item.model}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          width={400}
          height={300}
        />
      </div>

      <div className="p-4 text-center">
        {/* Title */}
        <h3 className="text-lg font-semibold text-green-900 dark:text-white">
          <Link href="detail.html" className="hover:underline">
            {item.model}
          </Link>
        </h3>
        {/* Price */}
        <div className="price text-gray-800 dark:text-white mt-2">
          {item.price}
        </div>
        {/* Location */}
        <div className="location text-gray-500 dark:text-white flex items-center justify-center mt-1">
          <i className="fa fa-map-marker text-red-500 mr-1" aria-hidden="true"></i>
          {item.city}
        </div>
      </div>
      {/* View Details Button */}
      <Button title={"View Details"} link={`/inventory/${item._id}`} />
    </div>

  );
};

export default InventoryCard;
