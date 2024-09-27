import React from 'react';

interface TitleProps {
  heading: string;
  subheading: string;
}

const Title: React.FC<TitleProps> = ({ heading, subheading }) => {
  return (
    <div className="text-center mb-10" id="contact">
      <h1 className="text-3xl font-black mb-3 font-bold text-gray-900 dark:text-white" >
      {heading}
      </h1>
      <h1 className="text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white">{subheading}</h1>
    </div>
  );
};

export default Title;
