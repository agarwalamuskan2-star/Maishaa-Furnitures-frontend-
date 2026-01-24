import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * PROJECTS Section Component
 * 
 * Clones the "PROJECTS" grid section featuring high-quality architectural and 
 * interior photographs with elegant hover zoom effects as specified in the 
 * design instructions.
 */

interface Project {
  title: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    title: "Summit Swiss Heritage",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/summit_swis-C6cdF-rk-11.webp",
    href: "/project/summit-swiss-heritage-resort-spa-mall-road-darjeeling",
  },
  {
    title: "IHCL SeleQtions, Bhutan",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/ihcl-D7mCdnbo-12.webp",
    href: "/project/ihcl-selections-bhutan",
  },
  {
    title: "Kake Di Hatti, Siliguri",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/Kake_Di_Hatti-D9O8E-QL-13.webp",
    href: "/project/kake-di-hatti-siliguri",
  },
  {
    title: "Mayfair Resort, Gangtok",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
    href: "/project/mayfair-resort-gangtok",
  },
];

export default function Projects() {
  return (
    <section className="bg-background py-10 md:py-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10 pb-4 border-b border-border">
          <h3 className="text-xl sm:text-2xl md:text-[32px] font-normal text-foreground tracking-wide font-body uppercase">
            PROJECTS
          </h3>
          <a
            href="/projects"
            className="flex items-center space-x-2 text-sm md:text-lg font-medium text-foreground hover:text-primary transition-colors tracking-wide font-body"
          >
            <span className="uppercase text-xs sm:text-sm tracking-widest">ALL PROJECTS</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>

        {/* Projects Grid - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="group block relative overflow-hidden bg-gray-100 cursor-pointer"
            >
              {/* Image Container 3:4 Aspect Ratio */}
              <div className="aspect-[3/4] w-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

                {/* Text Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-center h-full">
                  <h4 className="text-base sm:text-lg md:text-xl font-medium text-white text-center font-body tracking-wide mb-2">
                    {project.title}
                  </h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}