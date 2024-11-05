import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutImg, Hero } from "./utilis/Images";
import { Button, InventoryList } from "./component";
import { CarBrands, infoContent, services } from "./utilis/data";


export default function Home() {
  return (
    <main>
      {/* Hero / Banner Section */}
      <section className="relative w-full bg-gray-200 dark:bg-gray-900 overflow-hidden ptablet:max-h-[1100px]">
        <div className="relative container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4 flex items-center z-10 min-h-screen">
          <div className="w-full">
            <div className="grid grid-cols-12 gap-6">
              {/* Text Section */}
              <div className="col-span-12 md:col-span-7 h-full flex items-center">
                <div className="w-full text-center md:text-left">
                  <h1 className="font-sans font-light text-4xl md:text-5xl lg:text-7xl leading-none text-muted-800 dark:text-white">
                    Elevate Your Drive,<br /> Elevate Your Lifestyle
                  </h1>
                  <p className="font-sans text-base md:text-lg text-muted-500 dark:text-white my-4 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea
                    difficultate illae fallaciloquae, ut ait adipiscing elit.
                  </p>
                  <div className="flex  md:flex-row justify-center md:justify-start items-center gap-4 mb-4">
                    <Button title={"New Cars"} link={"/inventory"} />
                    <Button title={"Our Brand"} link={"/#brand"} />
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative col-span-12 md:col-span-5 mt-4 md:mt-0">
                <Image
                  className="relative max-w-full mx-auto z-20"
                  src={Hero}
                  alt="Hero image"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 md:w-72 md:h-72  w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-800 z-10 scale-150"></div>
              </div>
            </div> 
          </div>
        </div>
      </section>


      {/* About Section */}
      <div className="bg-white dark:bg-gray-900 overflow-hidden" id="about">
        <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center items-center">
              <Image
                src={AboutImg}
                alt="Car Image"
                className="w-full h-auto object-cover object-center"
              />
            </div>
            <div className="space-y-6">
              <div>
                <header>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Welcome to Daulat Cars!
                    <span className="block w-12 h-1 bg-gray-700 dark:bg-gray-300 mt-2"></span>
                  </h2>
                </header>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  WE ARE THE ENTHUSIASTS EMPOWERING EVERYONE TO ACHIEVE THEIR MOTORING DREAMS.<br />
                  Established in the year 2000 as a benchmark model for pre-owned premium & luxury cars.
                  This privately held dealership group has come a long way since it was started by Mr. Naushad Khatari and Yusuf Tanwar in Pune,
                  Maharashtra, India.<br />
                  We at Daulat Cars want to provide you an experience that is beyond your expectations in a friendly, professional, and efficient manner, creating transparency and trust with the products we sell. We also provide valuable suggestions
                  in areas like your car, loans, insurance, RTO Works & car models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory List Section */}
      <InventoryList isHome={true} />


      {/* Our Brand Section */}
      <div className="bg-white dark:bg-gray-900 overflow-hidden" id="brand">
        <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4 mt-4 mb-4 text-center dark:bg-gray-900 overflow-hidden">
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
            Vehicle Collections
          </h2>
          {/* <p className="mb-6 mt-4 text-gray-800 dark:text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-5 mb-4">
            {CarBrands.map((brand, index) => (
              <Link href={`/inventory/client/${brand?.name}`}
                key={index}
                className="relative flex flex-col items-center justify-center group mt-7 mb-5 bg-white p-4 
                rounded-md shadow-md transition-transform hover:scale-105"
              >
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      className="brand-img transition-transform duration-300 object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                <h3 className="mt-2 font-bold text-md sm:text-lg text-black">
                  {brand.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {brand.alt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Buy Sell Section */}
      <div className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoContent.map((info, index) => (
              <div
                key={info.id}
                className="relative h-64 md:h-80 flex justify-center items-center rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl"
              >
                <section
                  className={`area-bg  bg-cover bg-center w-full h-full relative`}
                  style={{ backgroundImage: info.backgroundImage }}
                >
                  <div className="area-bg__inner absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                    <h2 className="text-3xl font-bold">
                      {info.title}
                      <strong className="block text-4xl mt-2">{info.strongText}</strong>
                    </h2>

                    {/* Display the button conditionally based on the index */}
                    <div className="mt-4">
                      {index === 0 ? (
                        <Button title={"Search Your Car"} link={"/#inventory"} />
                      ) : (
                        <Button title={"Let Us Know"} link={"/contact"} />
                      )}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Services section start */}
      <div className="bg-gray-200 dark:bg-gray-900 overflow-hidden" id="services">
        <div className="container inset-0 mx-auto px-2 py-8 lg:px-12 lg:py-4">
          <div className="text-center mb-8">
            <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center mb-4">
                  {React.createElement(service.icon, { className: "text-6xl text-yellow-500" })}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-900 mt-5 "></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
