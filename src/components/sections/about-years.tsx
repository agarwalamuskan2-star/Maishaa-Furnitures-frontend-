import React from 'react';

const AboutYears = () => {
  return (
    <section className="bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="space-y-8">
            <h2 className="text-[56px] md:text-[64px] font-light text-[#0f172a] leading-[1.1] font-body uppercase tracking-[0.05em]">
              CELEBRATING<br />42 YEARS
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start space-y-8">
            <p className="text-[18px] md:text-[20px] text-[#0f172a] leading-[1.8] font-light max-w-xl">
              Established in 1983, Maishaa Furniture & Furnishings has grown to
              become a leading player in the furniture industry, offering a wide
              range of products and services. With a commitment to quality and
              innovation, we have established ourselves as a trusted name in the region.
            </p>

            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 text-[14px] font-medium tracking-[0.1em] text-[#0f172a] uppercase border border-[#0f172a] bg-transparent hover:bg-[#0f172a] hover:text-[#ffffff] transition-all duration-300 ease-in-out"
            >
              DISCOVER OUR STORY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYears;