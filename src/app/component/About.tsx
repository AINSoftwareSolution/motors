import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AboutImg } from "../utilis/Images";
import { aboutData } from "../utilis/data";
import Button from "./Button";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center items-center">
          <Image
            src={AboutImg}
            alt="Car Image"
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="space-y-6">
          {aboutData.map((content, index) => (
            <div key={index}>
              <header>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {content.header}
                  <span className="block w-12 h-1 bg-gray-700 dark:bg-gray-300 mt-2"></span>
                </h2>
              </header>
              {content.description.map((desc, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-4">
                  {desc}
                </p>
              ))}
            </div>
          ))}
          <div className="flex space-x-4 mt-6">
          <Button title={"Learn More "} link={"/"} />
          
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
