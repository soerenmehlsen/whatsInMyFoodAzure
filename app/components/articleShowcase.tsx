"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { posts} from '@/lib/consant';



export default function ArticleShowcase() {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const next = () => setCurrent((curr) => (curr + 1) % posts.length);
    const prev = () => setCurrent((curr) => (curr - 1 + posts.length) % posts.length);

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('da-DK', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="max-w-6xl mx-auto p-4 overflow-hidden">
            <div className="relative ">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${current * (isMobile ? 100 : 33.33)}%)` }}
                >
                    {posts.map((article, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/3 flex-shrink-0 px-2 transition-all duration-500"
                            style={{
                                transform: `scale(${index === current ? 1 : 0.9})`,
                                opacity: index === current ? 1 : 0.7
                            }}
                        >
                            {article.link.startsWith('http') ? (
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <ArticleCard article={article} formatDate={formatDate} />
                                </a>
                            ) : (
                                <Link href={article.link} className="block">
                                    <ArticleCard article={article} formatDate={formatDate} />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
                <button
                    onClick={prev}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="text-sm font-medium">
                    {current + 1} / {posts.length}
                </span>

                <button
                    onClick={next}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

