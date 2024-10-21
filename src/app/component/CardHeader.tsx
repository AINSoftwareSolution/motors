import Link from 'next/link';
import React from 'react';

interface CardProps {
    icon: React.ReactNode; // Accept any valid JSX element (such as an icon)
    title: string; // Title text
    button?: React.ReactNode; // Optional button or action
    link?: string;
}

const CardHeader: React.FC<CardProps> = ({ icon, title, button, link = '/' }) => {
    return (
        <div className="rounded bg-gray-100 dark:bg-gray-700 p-6 my-2 text-lg font-bold flex justify-between items-center text-gray-900 dark:text-white gap-x-2">
            {/* Left Section with Icon and Title */}
            <div className="flex items-center gap-x-2">
                {icon}
                <h4 className="text-gray-900 dark:text-white">{title}</h4>
            </div>
            {/* Right Section with Optional Button */}
            {button &&
                <div>
                    <Link href={link} className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm
             hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
             focus:outline-none disabled:bg-blue-300
              disabled:cursor-not-allowed w-full'
                    >{button}</Link>
                </div>
            }
        </div>
    );
};

export default CardHeader;
