"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

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
      <div className="dark:bg-gray-900 overflow-hidden">
        <div className="pageTitle py-4 mt-16 mb-16 shadow-lg gradient-bg ">
          <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-7/12 sm:w-6/12">
                <h1 className="text-2xl font-bold text-white">
                  Morcedas C180 Elegance 2008 Reg 2012
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-900 overflow-hidden" id="inventoryCard">
          <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4">
            {/* Grid layout with col-span for spacing between left and right sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-gray-900 dark:text-white">
              {/* Left Section - Car Image Carousel, Features, and Related Ads */}
              <div className="lg:col-span-7">
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

                <div className="flex space-x-2 mt-4">
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
                <div className="text-2xl mt-10 mb-10">
                  <h2 className="text-3xl font-bold mb-6">Features</h2>
                  <ul className="list-disc pl-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {carFeatures.map((feature, index) => (
                      <li key={index} className="text-lg">
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Ads */}

                <div className="relatedJobs mt-16 mb-10">
                  <h3 className="text-2xl font-semibold mb-4">Related Ads</h3>
                  <ul className="space-y-3">
                    {relatedAds.map((ad, index) => (
                      <li
                        key={index}
                        className="bg-white shadow rounded-lg p-4"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Ad Image */}
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

                          {/* Ad Info */}
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
                                    <span className="vinfo bg-gray-100 px-2 py-1 rounded-full text-sm mr-2 ">
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
                                {/* Ad Price */}
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
              <div className="lg:col-span-5">
                <div className="gradient-bg rounded-lg shadow-md p-6 mb-5">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">
                    Car Details
                  </h3>
                  <ul className="space-y-6">
                    {features.map((feature, index) => (
                      <li key={index}>
                        <div className="text-white text-xl mb-4">
                          {feature.text}
                        </div>
                        <div className="text-white text-4xl mb-4">
                          {feature.price}
                        </div>
                        <div className="flex items-center space-x-2 text-white mb-5">
                          <CiLocationOn className="text-3xl" />
                          <span className="text-lg">{feature.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white mb-5">
                          <CiClock2 className="text-3xl" />
                          <span className="text-lg">{feature.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Button Section */}
                  <div className="flex flex-col gap-4 mt-4">
                    <Link
                      href="tel:555 456 46679"
                      className="bg-blue-600 text-white px-6 py-4 flex items-center justify-center rounded text-center"
                    >
                      <FaPhoneAlt className="mr-2" /> 555 456 46679
                    </Link>
                    <Link
                      href="mailto:abc@gmail.com"
                      className="bg-gray-600 text-white px-6 py-4 flex items-center justify-center rounded"
                    >
                      <MdMessage className="mr-2" /> Send A Message
                    </Link>
                    <button
                      onClick={() => window.print()}
                      className="bg-gray-600 text-white px-6 py-4 flex items-center justify-center rounded"
                    >
                      <FaPrint className="mr-2" /> Print this Ad
                    </button>
                  </div>
                </div>

                {/* About Car Section */}
                <div className="gradient-bg rounded-lg shadow-md p-6 mb-5 mt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                    About This Car
                  </h3>
                  <ul className="space-y-2">
                    {aboutcar.map((aboutcarItem, index) => (
                      <li
                        key={index}
                        className="flex justify-between text-white text-md mb-2"
                      >
                        <div>{aboutcarItem.text}</div>
                        <div>{aboutcarItem.location}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stay Safe Section */}
                <div className="gradient-bg rounded-lg shadow-md p-6 mt-8">
                  <h3 className="text-2xl text-white font-bold mb-4 text-center">
                    Stay Safe
                  </h3>
                  <ul className="list-disc list-outside text-white pl-4">
                    {staySafe.map((tip, index) => (
                      <li key={index} className="mb-6">
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
