"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

/**
 * VIDEO BANNER SECTION
 * 
 * Features a high-quality background video with a functional
 * "Play/Pause" button overlay.
 */

const VideoBanner = () => {
    const [hasError, setHasError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

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

    return (
        <div className="w-full py-6 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <section
                onClick={togglePlay}
                className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-transparent group cursor-pointer"
            >
                {/* Background Video */}
                {!hasError ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onError={() => setHasError(true)}
                        className="absolute inset-0 w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop"
                    >
                        <source
                            src="https://www.maishaafurnitures.com/maishaa_hero_website_video_compressed_v2.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop')" }}
                    />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>

                {/* Play/Pause Button Overlay (Bottom Left) */}
                <div className="absolute bottom-12 left-8 sm:left-12 md:left-16 lg:left-20 z-20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {isPlaying ? (
                            <Pause className="w-5 h-5 text-white fill-white" />
                        ) : (
                            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        )}
                    </div>
                    <span className="text-white text-lg font-medium tracking-wide font-body">
                        {isPlaying ? "Pause" : "Play"}
                    </span>
                </div>
            </section>
        </div>
    );
};

export default VideoBanner;
