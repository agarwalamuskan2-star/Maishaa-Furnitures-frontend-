"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const FrenchCountryCollection = () => {
    const products = [
        { name: "Marcus Chesterfield 3 Seater Sofa", price: "2,24,000", originalPrice: "2,80,000", discount: "20% Off", emi: "19902", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Richmond Divider Console", price: "1,08,000", originalPrice: "1,20,000", discount: "10% Off", emi: "9596", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1565412850626-25f07b72982d?q=80&w=800" },
        { name: "Eloise Three Seater Sofa", price: "1,87,400", originalPrice: "2,08,222", discount: "10% Off", emi: "16650", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Whitmore Buffet Console", price: "1,36,800", originalPrice: "1,52,000", discount: "10% Off", emi: "12154", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Provence Dining Table", price: "92,000", originalPrice: "1,15,000", discount: "20% Off", emi: "8177", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Orleans Rattan Chair", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Bordeaux Wine Rack", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Lyon Sideboard", price: "85,000", originalPrice: "1,06,250", discount: "20% Off", emi: "7555", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Marseille Coffee Table", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Cannes Accent Mirror", price: "15,200", originalPrice: "19,000", discount: "20% Off", emi: "1351", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800" },
        { name: "Avignon Bookshelf", price: "1,12,000", originalPrice: "1,40,000", discount: "20% Off", emi: "9955", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Rustic Pine Wardrobe", price: "1,55,000", originalPrice: "1,93,750", discount: "20% Off", emi: "13777", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
        { name: "French Floral Rug", price: "22,000", originalPrice: "27,500", discount: "20% Off", emi: "1955", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=800" },
        { name: "Normandy Bench", price: "32,400", originalPrice: "40,500", discount: "20% Off", emi: "2880", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Castile Bed Frame", price: "1,88,000", originalPrice: "2,35,000", discount: "20% Off", emi: "16711", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Chateau Nightstand", price: "18,900", originalPrice: "23,625", discount: "20% Off", emi: "1680", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop"
                            alt="French Country Collection Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/5" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white text-center px-4">
                            <span className="text-sm md:text-xl font-light tracking-[0.4em] mb-2 opacity-90 lowercase italic">a time & style edition</span>
                            <h1 className="text-4xl md:text-8xl leading-tight font-light italic">
                                french country collection
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h3 className="text-4xl md:text-6xl font-serif text-gray-900">The French Country Collection</h3>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-4xl mx-auto">
                        The French Country Collection features a curated selection of timeless, handcrafted storage units that effortlessly blend traditional design with modern functionality.
                        Each piece is thoughtfully designed with exposed hinges, decorative knobs, and rustic finishes that evoke the charm of a countryside retreat.
                        These elements, combined with the elegance of natural wood and artisanal craftsmanship, create a seamless blend of timeless style and practical storage.
                        Perfect for homes seeking classic refinement, these consoles and cabinets offer both beauty and functionality,
                        bringing a touch of rustic elegance to any space.
                    </p>
                </section>

                {/* Designer's Choice */}
                <section className="bg-[#f7f7f7] w-full">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-stretch">
                        <div className="lg:col-span-2 p-12 md:p-24 flex flex-col justify-center space-y-10">
                            <span className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase">DESIGNER'S CHOICE</span>
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight">
                                    Whitmore Buffet Console
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                                    The Whitmore Buffet Console is a masterpiece of both style and practicality.
                                    Featuring an array of beautifully crafted metal handles, each drawer exudes classic elegance,
                                    enhancing the overall charm of the piece.
                                </p>
                            </div>
                            <button className="w-fit px-12 py-5 border border-black text-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
                                EXPLORE +
                            </button>
                        </div>
                        <div className="lg:col-span-3 relative h-[500px] md:h-auto overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1400"
                                alt="Whitmore Buffet Console"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore More Section */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-normal">Explore more</h2>
                        <p className="text-gray-500 font-light tracking-wide uppercase text-sm">
                            Furniture to choose from our most promising range of artistries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-24">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-6">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500 hover:scale-110">
                                        <Heart size={18} />
                                    </button>
                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-1.5 font-bold tracking-widest uppercase">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                    <h4 className="text-[16px] text-gray-900 font-medium group-hover:text-black transition-colors">
                                        {product.name}
                                    </h4>
                                    <div className="space-y-1">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[14px] text-gray-400 line-through font-light">₹{product.originalPrice}</p>
                                                <p className="text-[14px] text-orange-600 font-medium">{product.discount}</p>
                                            </div>
                                        </div>
                                        <p className="text-[13px] text-gray-500 font-light italic mt-2">
                                            EMI starts from ₹ {product.emi}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FrenchCountryCollection;
