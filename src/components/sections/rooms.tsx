import React from 'react';
import Image from 'next/image';

const roomsData = [
  {
    title: 'Sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Coffee Tables',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Beds',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Wardrobes',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Accent Chairs',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Home Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
  },
];

const RoomsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h3 className="text-2xl md:text-3xl font-light text-[#1a1a1a] capitalize tracking-wide font-body">
            In the Spotlight
          </h3>
        </div>

        {/* Grid Container - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
          {roomsData.map((room, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden">
              {/* Card Image Container */}
              <div className="relative aspect-square w-full">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Card Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                <h4 className="text-white text-sm md:text-base font-medium font-body text-left">
                  {room.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
