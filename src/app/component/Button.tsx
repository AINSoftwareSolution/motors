import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    title: string;
    link?: string;  // Optional for button usage
    isButton?: boolean;  // Flag to determine if it's a button or link
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;  // Optional click handler for button usage
}

const Button: React.FC<ButtonProps> = ({ title, link = '#', isButton = false, onClick , type }) => {
    const commonClasses = "box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 " +
        "overflow-hidden font-bold text-white transition-all duration-300 rounded-md cursor-pointer " +
        "group ease focus:outline-none hover:shadow-[0_4px_10px_rgba(48,98,84,0.4),0_4px_10px_rgba(38,80,64,0.3),0_4px_10px_rgba(31,68,54,0.3)]";
    const gradientStyle = {
        background: 'linear-gradient(180deg, #306254 0%, #265040 40%, #1f4436 75%, #1c3d31 100%)',
    };

    const content = (
        <>
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
        </>
    );

    return isButton ? (
        <button className={commonClasses} style={gradientStyle} onClick={onClick} type={type}>
            {content}
        </button>
    ) : (
        <Link href={link} className={commonClasses} style={gradientStyle}>
            {content}
        </Link>
    );
};

export default Button;
