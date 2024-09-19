import React from 'react';

interface TitleProps {
  heading: string;
  subheading: string;
}

const Title: React.FC<TitleProps> = ({ heading, subheading }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-black	bg-clip-text text-transparent bg-gradient-to-b from-[#8c484d] via-[#633854] to-[#2e1761] font-bold text-gray-900 dark:text-white">
      {heading}
      </h1>
      <h1 className="text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white">{subheading}</h1>

    </div>
  );
};

export default Title;
