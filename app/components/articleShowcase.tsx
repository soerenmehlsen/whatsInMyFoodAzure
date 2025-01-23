"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface article {
    date: string;
    title: string;
    content: string;
    Image: string;
    link: string;
    logo: string;
}

const posts: article[] = [
    {
        date: '2024-11-30',
        title: 'Forskere advarer mod udbredt gruppe af fødevarer',
        content: 'Forskere vil have os til at kigge på ingredienslisten, når vi køber ind. Hvis der er mere end fem ingredienser i en vare, bør vi være på vagt.',
        Image: '/hotdog.png',
        link: 'https://nyheder.tv2.dk/samfund/2024-11-30-forskere-advarer-mod-udbredt-gruppe-af-foedevarer',
        logo: '/tv2.png'
    },
    {
        date: '2024-6-12',
        title: 'Forskere om ultraforarbejdede fødevarer: Sådan styrer du udenom supermarkedets sundhedsskadelige produkter',
        content: 'Køb rigtig mad og lad de ultraforarbejdede fødevarer stå, siger to eksperter.',
        Image: '/kodpaalaeg.png',
        link: 'https://www.cancer.dk/nyheder-og-fortaellinger/2024/forskere-om-ultraforarbejdede-foedevarer-saadan-styrer-du-udenom-supermarkedets-sundhedsskadelige-produkter/',
        logo: '/kraeftensBekaempelse.png'
    },
    {
        date: '2024-7-11',
        title: 'Sådan spotter du ultraforarbejdede fødevarer',
        content: 'Du står i supermarkedet og vil gerne undgå at komme hjem med – alt for meget – ultraforarbejdet mad i dine indkøbsposer. Hvad gør du? Vi foreslår, du starter med denne guide.',
        Image: '/supermarket.png',
        link: 'https://iform.dk/sund-mad/kostraad/saadan-spotter-du-ultraforarbejdede-foedevarer',
        logo: '/videnskabdk.png'
    },
    {
        date: '2024-3-16',
        title: 'Kæmpe studie kobler ultraforarbejdet mad til mange sygdomme – men hvad betyder det?',
        content: 'Forskere er uenige om, hvordan resultaterne skal tolkes, og der er stadig meget, vi ikke ved om ultraforarbejdede fødevarer.',
        Image: '/is.png',
        link: 'https://videnskab.dk/krop-sundhed/kaempe-studie-kobler-ultraforarbejdet-mad-til-mange-sygdomme-men-hvad-betyder-det/',
        logo: '/iform.png'
    }
];

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

const ArticleCard = ({ article, formatDate }: { article: article, formatDate: (date: string) => string }) => (
    <article className="group relative text-left overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:h-96 h-72">
        <div className="aspect-w-16 aspect-h-9 w-full">
            <Image
                src={article.Image}
                alt="Article image"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className="relative h-full w-full bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent p-4 md:p-6">
            <div className="flex flex-col h-full justify-end">
                <div className="flex absolute top-4 left-4">
                    <Image
                        src={article.logo}
                        alt="Logo"
                        width={280}
                        height={280}
                        className="w-8 h-8 rounded-full"
                    />
                </div>
                <time dateTime={article.date} className="block text-xs text-white/90 mb-2">
                    {formatDate(article.date)}
                </time>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {article.title}
                </h3>

                <p className="line-clamp-3 text-sm md:text-base text-white/95">
                    {article.content}
                </p>
            </div>
        </div>
    </article>
);