"use client";
import React from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = 5;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video Holder */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src="https://www.maishaafurnitures.com/maishaa_hero_website_video_compressed_v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay as per design instructions and computed styles */}
        <div className="absolute inset-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 sm:left-8 z-30 p-2 text-white hover:text-gray-300 transition-colors hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 sm:right-8 z-30 p-2 text-white hover:text-gray-300 transition-colors hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Hero Content Container */}
      <div className="relative z-10 flex items-center h-full w-full">
        <div className="text-left text-white max-w-4xl px-4 sm:px-8 lg:px-20">
          <h1
            className="text-3xl sm:text-4xl md:text-[60px] font-bold mb-4 tracking-tight leading-[1.1]"
          >
            Maisha Furnitures
          </h1>

          <h2
            className="text-xl sm:text-2xl md:text-3xl font-light mb-6 opacity-90 tracking-[0.05em]"
          >
            WHERE COMFORT MEETS ELEGANCE
          </h2>

          <p
            className="text-base sm:text-lg md:text-[18px] mb-10 max-w-2xl leading-[1.6] opacity-80 font-light"
          >
            Discover our premium collection of handcrafted furniture that transforms your space into a sanctuary of style and comfort.
          </p>

          <a
            href="/products"
            className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white border-2 border-white transition-all duration-300 overflow-hidden cursor-pointer tracking-wider uppercase"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Explore Collection
            </span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out origin-bottom"></div>
          </a>
        </div>
      </div>

      {/* Bottom Controls Container */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 left-4 sm:left-6 md:left-12 z-20 flex items-center gap-4 sm:gap-6 md:gap-8">

        {/* Helper/Counter */}
        <div className="text-white font-medium text-xs sm:text-sm tracking-widest flex items-center gap-2 sm:gap-4">
          <span className="font-bold text-base sm:text-lg">{String(currentSlide).padStart(2, '0')}</span>
          <span className="w-8 sm:w-12 h-[1px] bg-white/50 block"></span>
          <span className="opacity-60">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        {/* Video Controls */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={togglePlay}
            aria-label="Toggle Playback"
            className="p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 group"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform fill-white" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform fill-white" />
            )}
          </button>
          <button
            onClick={toggleMute}
            aria-label="Toggle Mute"
            className="p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 group"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Accessibility / Decorative Element styling from globals.css */}
      <style jsx global>{`
        .btn-hero {
            border: 2px solid #ffffff;
            padding: 0.75rem 2rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition: all 0.3s ease;
        }
        .btn-hero:hover {
            background-color: #ffffff;
            color: #000000;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
