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
    title: 'Outdoor Collection',
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
    <section className="bg-background py-6 md:py-10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-left">
          <h3 className="text-xl sm:text-2xl md:text-[32px] font-normal text-foreground capitalize tracking-wide font-body">
            In the Spotlight
          </h3>
        </div>

        {/* Grid Container - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {roomsData.map((room, index) => (
            <div key={index} className="space-y-4 group cursor-pointer">
              {/* Card Image Container */}
              <div className="relative overflow-hidden bg-gray-100">
                <div className="aspect-square w-full relative">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Subtle overlay on hover if needed */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Card Label */}
              <h4 className="text-lg md:text-xl font-normal text-foreground font-body text-left">
                {room.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;