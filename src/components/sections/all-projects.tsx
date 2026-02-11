import React from 'react';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    location: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Hilton Tulum Riviera Maya All-Inclusive Resort",
        location: "Mexico",
        image: "/images/outdoor/seating-cat.png",
    },
    {
        id: 2,
        title: "Star of the Seas - Royal Caribbean Cruises",
        location: "USA",
        image: "/images/outdoor/dining-cat.png",
    },
    {
        id: 3,
        title: "Atlantic El Tope Hotel",
        location: "Spain",
        image: "/images/outdoor/hero.png",
    },
    {
        id: 4,
        title: "Grand Hyatt Luxury Villas",
        location: "Dubai",
        image: "/images/outdoor/accessories-cat.png",
    },
    {
        id: 5,
        title: "Marriott Beachfront Suite",
        location: "Maldives",
        image: "/images/outdoor/wren-chair.png",
    },
    {
        id: 6,
        title: "The Ritz-Carlton Penthouse",
        location: "New York",
        image: "/images/collections-banner.png",
    },
    {
        id: 7,
        title: "Modern Minimalist Villa",
        location: "London",
        image: "/images/outdoor/hero.png",
    },
    {
        id: 8,
        title: "Skyline Executive Office",
        location: "Singapore",
        image: "/images/outdoor/seating-cat.png",
    },
    {
        id: 9,
        title: "Zen Garden Resort",
        location: "Japan",
        image: "/images/outdoor/dining-cat.png",
    },
    {
        id: 10,
        title: "Mediterranean Coastal Estates",
        location: "Italy",
        image: "/images/outdoor/accessories-cat.png",
    },
    {
        id: 11,
        title: "Alpine Luxury Lodge",
        location: "Switzerland",
        image: "/images/outdoor/wren-chair.png",
    },
    {
        id: 12,
        title: "Boutique Art Hotel",
        location: "France",
        image: "/images/collections-banner.png",
    },
    {
        id: 13,
        title: "Desert Mirage Resort",
        location: "Arizona",
        image: "/images/outdoor/hero.png",
    },
    {
        id: 14,
        title: "Heritage Palace View",
        location: "India",
        image: "/images/outdoor/seating-cat.png",
    },
    {
        id: 15,
        title: "Savannah Safari Lodge",
        location: "South Africa",
        image: "/images/outdoor/dining-cat.png",
    },
    {
        id: 16,
        title: "Tropical Rainforest Retreat",
        location: "Bali",
        image: "/images/outdoor/accessories-cat.png",
    },
    {
        id: 17,
        title: "Nordic Design Apartment",
        location: "Norway",
        image: "/images/outdoor/wren-chair.png",
    },
    {
        id: 18,
        title: "Urban Loft Residency",
        location: "Berlin",
        image: "/images/collections-banner.png",
    },
];

export default function AllProjects() {
    return (
        <section id="all-projects" className="bg-[#fafafa] pb-16 md:pb-24 pt-8 md:pt-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 md:gap-y-20">
                    {projects.map((project) => (
                        <div key={project.id} className="group flex flex-col items-center">
                            {/* Image Container */}
                            <div className="aspect-[4/3] w-full relative overflow-hidden mb-8 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center px-4 max-w-[90%]">
                                <h3 className="text-[17px] md:text-[19px] font-medium text-[#1a1a1a] leading-relaxed mb-2 transition-colors duration-300 group-hover:text-black">
                                    {project.title}
                                </h3>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-[1px] bg-gray-400"></div>
                                    <p className="text-[14px] md:text-[15px] font-light text-gray-500 uppercase tracking-widest">
                                        {project.location}
                                    </p>
                                    <div className="w-4 h-[1px] bg-gray-400"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
