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
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Marriott Beachfront Suite",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "The Ritz-Carlton Penthouse",
        location: "New York",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 7,
        title: "Modern Minimalist Villa",
        location: "London",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 8,
        title: "Skyline Executive Office",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 9,
        title: "Zen Garden Resort",
        location: "Japan",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 10,
        title: "Mediterranean Coastal Estates",
        location: "Italy",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 11,
        title: "Alpine Luxury Lodge",
        location: "Switzerland",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 12,
        title: "Boutique Art Hotel",
        location: "France",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 13,
        title: "Desert Mirage Resort",
        location: "Arizona",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 14,
        title: "Heritage Palace View",
        location: "India",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 15,
        title: "Savannah Safari Lodge",
        location: "South Africa",
        image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 16,
        title: "Tropical Rainforest Retreat",
        location: "Bali",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 17,
        title: "Nordic Design Apartment",
        location: "Norway",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 18,
        title: "Urban Loft Residency",
        location: "Berlin",
        image: "https://images.unsplash.com/photo-1536376074432-bf12177d4f4f?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function AllProjects() {
    return (
        <section className="bg-[#fafafa] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Title */}
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-3xl md:text-4xl font-light text-black tracking-[0.2em] uppercase mb-4 font-serif">
                        ALL PROJECTS
                    </h1>
                    <div className="w-20 h-[1px] bg-black mx-auto mt-6"></div>
                </div>

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
