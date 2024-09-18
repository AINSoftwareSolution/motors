import React from 'react';
import Image from 'next/image';  
import Link from 'next/link';    
import { CarBrands } from '../utilis/data';  

const OurBrand = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-12 text-center bg-gray-200 dark:bg-gray-900 overflow-hidden">
      <h2 className="text-black dark:text-white text-4xl font-bold mt-5">Our Brand</h2>
      <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5 mb-4">
        {CarBrands.map((brand, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center group mt-7 mb-5 p-4">
            <Link href={brand.link}> 
              <div className="relative flex items-center justify-center">
                <Image 
                  src={brand.src} 
                  alt={brand.alt} 
                  className="brand-img transition-transform duration-300" 
                  width={100}  
                  height={100} 
                  objectFit="contain"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
            </Link>
            <h3 className="mt-4 font-bold text-lg text-black">{brand.name}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{brand.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBrand;
