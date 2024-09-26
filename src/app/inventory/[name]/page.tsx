"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaPrint } from "react-icons/fa";
import {
  aboutcar,
  carFeatures,
  features,
  images,
  relatedAds,
  staySafe,
} from "../../utilis/data";

const CarDetails = () => {
  // State to manage the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleThumbnailClick = (index: React.SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
   <div className="pageTitle bg-green-900  py-8 mt-16 mb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-between">
      {/* Title Section */}
      <div className="w-full md:w-7/12 sm:w-6/12">
        <h1 className="text-2xl font-bold text-gray-900">
          Morcedas C180 Elegance 2008 Reg 2012
        </h1>
      </div>
     </div>
    </div>
  </div>

    <div className=" dark:bg-gray-900 overflow-hidden" id="inventoryCard">
    <div className=" ml-20 pt-4 mt-4 dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 text-gray-900 dark:text-white">
        {/* Left Section - Car Image Carousel */}
        <div>
            <div className="flex flex-col items-center ">
              <div className="w-full h-96 overflow-hidden relative">
                <ul className="flex transition-transform duration-500">
                  {images.map((image, index) => (
                    <li
                      key={index}
                      className={`flex-shrink-0 w-full h-full ${
                        index === currentImageIndex ? "block" : "hidden"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        className="w-full"
                        objectFit="cover"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between w-full mt-4">
                <Link href="#" className="text-gray-500">
                  <i className="fa fa-angle-left text-2xl"></i>
                </Link>
                <Link href="#" className="text-gray-500">
                  <i className="fa fa-angle-right text-2xl"></i>
                </Link>
              </div>
            </div>

            {/* Carousel Thumbnails */}
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-24 h-24 overflow-hidden cursor-pointer"
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className="hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          

          {/* Car Features */}
          <div className="text-2xl mt-10 mb-4">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {carFeatures.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Related ads */}
          <div className="relatedJobs mt-10 mb-10">
            <h3 className="text-2xl font-semibold mb-4">Related Ads</h3>
            <ul className="space-y-3">
              {relatedAds.map((ad, index) => (
                <li key={index} className="bg-white shadow rounded-lg p-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-20 mb-2 md:mb-0">
                      <div className="adimg">
                        <Image
                          src={ad.imageSrc}
                          alt={ad.title}
                          className="rounded-lg w-full h-auto object-cover"
                          width={300}
                          height={200}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-3/2">
                      <div className="jobinfo">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-2/3 ">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              <Link href={ad.detailsUrl}>{ad.title}</Link>
                            </h3>
                            <div className="location text-gray-500 mt-2">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                              <span>{ad.year}</span>
                            </div>
                            <div className="location text-gray-500 mt-2">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>
                              <span>{ad.mileage}</span>
                            </div>
                            <div className="location text-gray-500 mt-2">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                              <span>{ad.location}</span>
                            </div>
                            <div className="flex flex-wrap mt-4">
                              <span className="vinfo bg-gray-100 px-2 py-1 rounded-full text-sm mr-2">
                                {ad.fuelType}
                              </span>
                              <span className="vinfo bg-gray-100 px-2 py-1 rounded-full text-sm mr-2">
                                {ad.engine}
                              </span>
                              <span className="vinfo bg-gray-100 px-2 py-1 rounded-full text-sm mr-2">
                                {ad.transmission}
                              </span>
                            </div>
                            <div className="date text-gray-400 text-sm mt-4">
                              Last Updated: {ad.lastUpdated}
                            </div>
                          </div>
                          <div className="w-full md:w-1/3 text-right mt-4 md:mt-0 ">
                            <div className="adprice text-2xl font-bold ">
                              {ad.price}
                            </div>
                            <div className="listbtn mt-4">
                              <Link
                                href={ad.detailsUrl}
                                className="text-blue-500 hover:text-blue-700 flex items-center justify-end"
                              >
                                View Details
                                <i
                                  className="fa fa-arrow-circle-right ml-2"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Card with Features and Comments */}
        <div className=" w-90 mr-20">
          <div className="bg-green-900 rounded-lg shadow-md p-6 w-90 mr-20 mx-auto mb-5">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">
              Car Details
            </h3>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index}>
                  {feature.text && (
                    <div className="text-white text-xl mb-4">
                      {feature.text}
                    </div>
                  )}
                  {/* Price */}
                  {feature.price && (
                    <div className="text-white text-4xl mb-4">
                      {feature.price}
                    </div>
                  )}

                  {/* Icon and Location */}
                  {feature.location && (
                    <div className="flex items-center space-x-2 text-white mb-5">
                      <CiLocationOn className="text-3xl" />
                      <span className="text-lg">{feature.location}</span>
                    </div>
                  )}

                  {/* Time */}
                  {feature.time && (
                    <div className="flex items-center space-x-2 text-white mb-5">
                      <CiClock2 className="text-3xl" />
                      <span className="text-lg">{feature.time}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Button Section */}
            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="#."
                className="bg-blue-600 text-white px-6 py-4 flex items-center justify-center rounded text-center"
              >
                <FaPhoneAlt className="mr-2" aria-hidden="true" /> 555 456 46679
              </Link>
              <Link
                href="#."
                className="bg-gray-600 text-white px-6 py-4 flex items-center justify-center rounded"
              >
                <MdMessage className="mr-2" aria-hidden="true" /> Send A Message
              </Link>
              <Link
                href="#."
                className="bg-gray-600 text-white px-6 py-4 flex items-center justify-center rounded"
              >
                <FaPrint className="mr-2" aria-hidden="true" /> Print this Ad
              </Link>
            </div>
          </div>

          {/* about car  */}
          <div className="bg-green-900 rounded-lg shadow-md p-6 w-90 mr-20 mx-auto mb-5">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              About This Car
            </h3>
            <ul className="space-y-2">
              {aboutcar.map((aboutcarItem, index) => (
                <li
                  key={index}
                  className="flex justify-between text-white text-md mb-2"
                >
                  {aboutcarItem.text && (
                    <div className="flex-1">{aboutcarItem.text}</div>
                  )}
                  {aboutcarItem.location && (
                    <div className="flex-1 text-right">
                      {aboutcarItem.location}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* stay safe */}
          <div className="bg-green-900 rounded-lg shadow-md p-6 w-90 h-90 mr-20  mx-auto">
            <h3 className="text-2xl text-white font-bold mb-4 text-center">
              Stay Safe
            </h3>
            <div className="rounded-lg p-4">
              <ul className="list-disc list-inside text-white">
                {staySafe.map((tip, index) => (
                  <li key={index} className="mb-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default CarDetails;
