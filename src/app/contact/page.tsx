import React from "react";
import Title from "../component/TItle"
import { MdAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Link from "next/link";
import { Button } from "../component";

const Contact = () => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-12 font-bold text-gray-900 dark:text-white" id="contact">
        <Title
          heading="Contact us"
          subheading="Reach us easily by completing the form or finding our address"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="space-y-8 font-bold text-gray-900 dark:text-white">

            <div className="flex space-x-4 font-bold text-gray-900 dark:text-white">
              <div className="text-3xl">

                <MdAddIcCall />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760]">
                  Call Anytime
                </h2>
                <p className="text-gray-700 font-bold text-gray-900 dark:text-white mb-4">+919764021786 / +917264021786</p>
              </div>
            </div>
            <div className="flex space-x-4 mb-3">
              <div className="text-3xl">
                <FaLocationDot />

              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760] ">
                  Location:
                </h2>
                <p className="text-gray-700 font-semibold text-gray-900 dark:text-white mb-4">
                  Ambedkar Housing Society ,Golf Club Rd beside Ambedkar<br />
                  Function Hall, Dr Ambedkar Co Oprative Society, Yerawada<br />
                  Pune Maharashtra - 411006, Maharashtra India.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-3xl">
                <MdOutlineMarkEmailRead />

              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2e1760]">
                  Email Address:
                </h2>
                <p>
                  <Link
                    href="mailto:daulatcars@gmail.com"
                    className="text-blue hover:underline"
                  >
                    daulatcars@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}

          <div>
            <form className="space-y-4 ">
              <div className="flex space-x-4">
                {/* First Name Field */}
                <div className="relative w-1/2 ">
                  <label className="block mb-1 text-gray-700 text-gray-900 dark:text-white">
                    First Name<span className="text-red-500 text-gray-900 dark:text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="first name"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:placeholder-opacity-0"
                    required
                  />
                </div>
                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 text-gray-900 dark:text-white">
                    Last Name<span className="text-red-500 text-gray-900 dark:text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="last name"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:placeholder-opacity-0"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-4">

                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 text-gray-900 dark:text-white" >
                    Contact<span className="text-red-500 text-gray-900 dark:text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:placeholder-opacity-0"
                    required
                  />
                </div>

                <div className="relative w-1/2">
                  <label className="block mb-1 text-gray-700 text-gray-900 dark:text-white">
                    Email<span className="text-red-500 text-gray-900 dark:text-white">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:placeholder-opacity-0"
                    required
                  />
                </div>
              </div>

              <div className="relative w-full">
                <label className="block mb-1 text-gray-700 text-gray-900 dark:text-white">
                  Message<span className="text-red-500 text-gray-900 dark:text-white">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your queries here!"
                  className="w-full px-4 py-5 border border-gray-300 rounded-md focus:outline-none focus:placeholder-opacity-0"
                  required
                ></textarea>
              </div>

              <Button type={'submit'} isButton={true} title={'Submit'} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
