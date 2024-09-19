import React from 'react';
import { infoContent } from '../utilis/data'; 
import Link from 'next/link';

const BuyCell = () => {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoContent.map((info) => (
          <div key={info.id} className="relative h-64 md:h-80 flex justify-center items-center rounded-lg overflow-hidden">
            <section
              className={`area-bg ${info.backgroundColor} bg-cover bg-center w-full h-full relative`}
              style={{ 
                backgroundImage: info.backgroundImage,
              
              }}
            >
              <div className="area-bg__inner absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-3xl font-bold">
                  {info.title}
                  <strong className="block text-4xl mt-2">{info.strongText}</strong>
                </h2>
                <Link
                  className="btn bg-white text-gray-900 font-bold py-2 px-6 mt-4 rounded-lg hover:bg-red-500 transition"
                  href={info.buttonLink}
                >
                  {info.buttonText}
                </Link>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BuyCell;
