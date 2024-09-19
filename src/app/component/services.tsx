import React from 'react';
import { services } from '../utilis/data';

const Services = () => {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 overflow-hidden">
    <div className="bg-gray-200 bg-cover bg-center py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Our Services</h2>
          <div className="bg-red-500 h-1 w-32 mx-auto my-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              {/* Adjust font size directly using Tailwind classes */}
              {/* <FontAwesomeIcon icon={service.icon} className="text-yellow-500 mb-4 custom-icon-size" /> */}
              <p className="text-gray-600">{service.description}</p>
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-500 mt-4"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
 </div>
  );
};

export default Services;
