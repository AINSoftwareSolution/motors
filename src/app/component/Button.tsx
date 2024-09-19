// Button.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    title: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
    return (
        <Link href={link} className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 
            overflow-hidden font-bold text-white transition-all duration-300 rounded-md cursor-pointer 
            group  ease 
            focus:outline-none hover:shadow-[0_4px_10px_rgba(140,72,77,0.4),0_4px_10px_rgba(99,56,84,0.3),0_4px_10px_rgba(46,23,95,0.3)]"
            style={{ 
                background: 'linear-gradient(180deg, #8c484d 0%, #633854 40%, #2e175f 75%, #2e1761 100%)',
            }}>
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out 
                transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out
                 transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
                <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                {title}
            </span>
        </Link>
    );
};

export default Button;
