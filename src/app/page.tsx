import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "./utilis/Images";
import { CarBrands, infoContent, services } from "./utilis/data";
import { OurBrand, About, Button,InventoryList } from "./component";
import Contact from "@/contact/page";

    

export default function Home() {
  return (
    <main>
      {/* Hero / Banner Section */}
      <section className="relative w-full ptablet:max-h-[1100px] bg-gray-200 dark:bg-gray-900 overflow-hidden">
        <div className="relative min-h-screen w-full max-w-7xl mx-auto flex items-center z-10">
          <div className="w-full px-4">
            <div className="grid grid-cols-12">
              <div className="col-span-5 h-full flex items-center">
                <div className="w-full">
                  <h1 className="font-sans font-light text-5x lg:text-7xl leading-none text-muted-800 dark:text-white">
                    Find your beauty
                  </h1>
                  <p className="font-sans text-lg text-muted-500 dark:text-white max-w-xl mx-auto my-4 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex
                    ea difficultate illae fallaciloquae, ut ait adipiscing elit.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                      <Button title={"New Cars"} link={"/"} />
                      <Button title={"Inventory"} link={"/"} />
                      
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative col-span-7">
                <Image
                  className="relative max-w-xl mx-auto z-20"
                  src={Hero}
                  alt="Hero image"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gray-300 dark:bg-gray-800 z-10 scale-150"></div>
              </div>
            </div>

            {/* Hero Logos */}
            <div className="absolute bottom-8 inset-x-0 hidden w-full max-w-lg mx-auto md:flex items-center justify-center gap-x-6 text-muted-500 dark:text-muted-100/50">
              {CarBrands.map((brand, index) => (
                <div key={index} className="flex-1">
                  <div className="flex items-center justify-center px-4">
                    <Image src={brand.src} alt={brand.alt} className="brand-img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Inventory List Section */}
      <InventoryList />

      {/* Our Brand Section */}
      <OurBrand />

      {/* Buy Cell Section */}
      <div className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoContent.map((info) => (
              <div
                key={info.id}
                className="relative h-64 md:h-80 flex justify-center items-center rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl"
              >
                <section
                  className={`area-bg ${info.backgroundColor} bg-cover bg-center w-full h-full relative`}
                  style={{ backgroundImage: info.backgroundImage }}
                >
                  <div className="area-bg__inner absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
                    <h2 className="text-3xl font-bold">
                      {info.title}
                      <strong className="block text-4xl mt-2">
                        {info.strongText}
                      </strong>
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

      <div className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold mt-5">
            Our Services
          </h2>
          <div className="bg-red-500 h-1 w-32 mx-auto my-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-500 mt-4"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
     <Contact />
    </main>
  );
}
