import Link from "next/link";
import Image from "next/image";
import { Hero } from "./utilis/Images";
import { CarBrands } from "./utilis/data";
import  InventoryList from "./component/InventoryList";
import { OurBrand } from "./component";
import About from "./component/About"

export default function Home() {
  return (
    <main>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea difficultate illae fallaciloquae, ut ait
                    adipiscing elit.
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <Link
                      href="#"
                      className="relative font-sans font-normal inline-flex items-center
                        justify-center leading-5 no-underline w-full md:w-auto
                        min-w-[130px] space-x-1 rounded text-white bg-muted-800 bg-red-600 h-12 px-5 py-3 text-base hover:bg-muted-700
                        hover:bg-red-500 hover:shadow-xl hover:shadow-muted-300/20 hover:shadow-red-600/20 tw-accessibility transition-all
                        duration-300">
                      New Cars
                    </Link>
                    <Link
                      href="#"
                      className="relative font-sans font-normal inline-flex items-center
                        justify-center leading-5 no-underline w-full md:w-auto
                        min-w-[130px] space-x-1 rounded text-white  bg-slate-700
                        border dark:text-slate-900 dark:bg-white dark:border-slate-600 hover:shadow-xl 
                        hover:shadow-muted-300/20 hover:shadow-slate-600/20
                        h-12 px-5 py-3 text-base tw-accessibility transition-all duration-300 scroll-link">
                      Inventory
                    </Link>
                  </div>
                </div>
              </div>

              {/* Column for Hero Image */}
              <div className="relative col-span-7">
                {/* Uncomment the following line to add a Hero Image */}
                {/* <img className="relative max-w-xl mx-auto z-20" src="/img/vehicles/hero.png" alt="Hero image" /> */}
                <Image className="relative max-w-xl mx-auto z-20" src={Hero} alt="Hero image" />

                {/* Overlay */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-72 h-72 rounded-full bg-gray-300 dark:bg-gray-800 z-10 scale-150"></div>
              </div>
            </div>

            {/* Hero Logos */}
            <div
              className="
                absolute bottom-8 inset-x-0 hidden w-full max-w-lg mx-auto
                md:flex items-center justify-center gap-x-6 text-muted-500
                dark:text-muted-100/50"
            >
              {CarBrands.map((brand, index) => (
                <div key={index} className="flex-1">
                  <div className="flex items-center justify-center px-4">
                    <Image src={brand.src} alt={brand.alt}  className="brand-img" style={{}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <About />
     <InventoryList />
     <OurBrand />
    </main>
  );
}
