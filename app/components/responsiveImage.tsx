"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Change the image based on the screen size
const ResponsiveImage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Image
            src={isMobile ? "/Iphones-mobile.png" : "/Iphones.png"}
            alt="Hero section image"
            width={1200}
            height={1000}
            priority
        />
    );
};

export default ResponsiveImage;