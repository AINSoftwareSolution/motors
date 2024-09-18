import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CarBrands } from "../utilis/data";

const OurBrand = () => {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-12 mt-4 mb-4 text-center dark:bg-gray-900 overflow-hidden">
        <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
          Vehicle Collections
        </h2>
        <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-5 mb-4">
          {CarBrands.map((brand, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center group mt-7 mb-5 bg-white dark:bg-white p-4 rounded-md shadow-md transition-transform hover:scale-105"
            >
              <Link href={brand.link}>
                <div className="relative flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    className="brand-img transition-transform duration-300 object-contain" 
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <h3 className="mt-4 font-bold text-md sm:text-lg text-black dark:text-white">
                {brand.name}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {brand.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
