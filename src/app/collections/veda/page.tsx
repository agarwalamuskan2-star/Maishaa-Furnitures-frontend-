"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const VedaSangrah = () => {
    const products = [
        { name: "Veda Cane Bookcase with Storage Cabinet (60)", price: "71,920", originalPrice: "89,900", discount: "20% Off", emi: "6390", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Veda Cane Bookcase with Storage Cabinet (80)", price: "77,920", originalPrice: "97,400", discount: "20% Off", emi: "6923", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
        { name: "Veda Cane Kids Desk with Outlet & Hutch (80)", price: "79,920", originalPrice: "99,900", discount: "20% Off", emi: "7101", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Veda Cane Workspace Desk with Outlet & Hutch (120)", price: "98,720", originalPrice: "1,23,400", discount: "20% Off", emi: "8771", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Ancient Oak Bookshelf", price: "55,000", originalPrice: "68,750", discount: "20% Off", emi: "4888", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Heritage Study Table", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800" },
        { name: "Sutra Floating Shelves", price: "12,900", originalPrice: "16,125", discount: "20% Off", emi: "1146", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Mantra Ergonomic Chair", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800" },
        { name: "Ashram Corner Unit", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800" },
        { name: "Brahman Large Desk", price: "1,15,000", originalPrice: "1,43,750", discount: "20% Off", emi: "10222", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=800" },
        { name: "Veda Mini Organizer", price: "8,500", originalPrice: "10,625", discount: "20% Off", emi: "755", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800" },
        { name: "Rishi Walnut Console", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Gurukul Bunk Desk", price: "82,000", originalPrice: "1,02,500", discount: "20% Off", emi: "7288", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800" },
        { name: "Sanskrit Side Credenza", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Veda Tall Bookcase", price: "88,900", originalPrice: "1,11,125", discount: "20% Off", emi: "7902", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Temple Carved Pedestal", price: "15,000", originalPrice: "18,750", discount: "20% Off", emi: "1333", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Dharma Study Suite", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12888", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" },
        { name: "Karma Compact Stool", price: "6,800", originalPrice: "8,500", discount: "20% Off", emi: "604", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Veda Archive Cabinet", price: "52,400", originalPrice: "65,500", discount: "20% Off", emi: "4657", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Om Sacred Nook", price: "28,900", originalPrice: "36,125", discount: "20% Off", emi: "2568", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2000&auto=format&fit=crop"
                        alt="Veda Sangrah Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white">
                        <h1 className="text-5xl md:text-8xl font-serif mb-4 leading-tight lowercase">
                            veda sangrah
                        </h1>
                        <p className="text-sm md:text-xl font-light tracking-[0.4em] uppercase opacity-90">
                            modular sanctuary for inspired minds
                        </p>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h3 className="text-4xl md:text-6xl font-serif text-gray-900">Veda Sangrah</h3>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-4xl mx-auto">
                        The Veda Sangrah captures the timeless wisdom of the Vedas, blending beauty and function in perfect harmony.
                        This modular set, designed for both home offices and study spaces, transforms your workspace into a haven of creativity.
                        With desks, storage units, and bookshelves each piece is thoughtfully crafted to inspire and organize,
                        creating a space where ideas flow freely. The Veda Sangrah is where thought and creativity come alive,
                        uniting design with the essence of knowledge and wisdom.
                    </p>
                </section>

                {/* Designer's Choice */}
                <section className="border-t border-gray-100">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">
                        <div className="bg-[#fcfbf9] p-12 md:p-24 flex flex-col justify-center space-y-10">
                            <span className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase">DESIGNER'S CHOICE</span>
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                                    Veda Cane Modular Workspace Desk
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    The Veda Modular Workspace Desk with Bookcase Storage Cabinets is the ideal setup for a versatile home office or study space.
                                    This elegantly designed set features a spacious desk with built-in drawers and tall bookcase cabinets,
                                    all accented by sophisticated brass bushes on the legs that elevate the overall aesthetic.
                                </p>
                            </div>
                            <button className="w-fit px-12 py-5 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300">
                                View Product
                            </button>
                        </div>
                        <div className="relative h-[400px] md:h-auto min-h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1200&auto=format&fit=crop"
                                alt="Veda Cane Modular Workspace Desk"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore More Section */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Explore more</h2>
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
                                        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-1.5 font-bold tracking-widest">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                    <h4 className="text-[15px] text-gray-900 font-medium group-hover:text-black transition-colors line-clamp-2">
                                        {product.name}
                                    </h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <p className="text-[17px] font-bold text-gray-900">₹{product.price}</p>
                                            <p className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</p>
                                            <p className="text-[14px] text-orange-500 font-medium">{product.discount}</p>
                                        </div>
                                        <p className="text-[12px] text-gray-500 font-light italic">
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

export default VedaSangrah;
