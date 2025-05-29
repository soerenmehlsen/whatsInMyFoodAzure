"use client"
import Link from "next/link";
import { MdOutlineFastfood } from "react-icons/md";
import  React, { useState, useEffect } from 'react';
import  AnnouncementBanner  from './AnnoncementBanner';

export function Header() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <header className=" bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <MdOutlineFastfood className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800 sm:text-2xl">
              What&apos;s in my food?
            </span>
          </Link>

       
            <div className="flex space-x-2">
             
                <button
                    className="bg-white hover:bg-gray-200 text-black font-semibold rounded-3xl border transition-colors duration-200 px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base">
                  Login
                </button>
              
          
                <button
                    className="bg-black hover:bg-gray-500 text-white font-semibold rounded-3xl transition-colors duration-200 px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base">
                  Sign Up
                </button>
  
            </div>

          
        
           

      
        </div>
      </div>

      <div className="text-center mx-auto ">
                <AnnouncementBanner
                    message="🎉 Limited Time Offer: Get Access Completely Free!"
                    linkText="Try it Now →"
                    />
            </div>
           
    </header>
  );
}
