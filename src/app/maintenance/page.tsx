"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const MaintenancePage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-gray-50 flex items-center justify-center">
                    <div className="text-center px-4 max-w-2xl mx-auto space-y-6">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Product Care</span>
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">Care & Maintenance</h1>
                        <p className="text-gray-500 font-light text-lg">
                            Preserve the beauty and longevity of your Maishaa furniture with our expert care guide.
                        </p>
                    </div>
                </section>

                <section className="py-24 px-4 sm:px-8 max-w-5xl mx-auto space-y-24">
                    {/* Wood Care */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="sticky top-32">
                            <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1579294800821-694d95e861d3?q=80&w=800"
                                    alt="Wood Care"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Solid Wood</h2>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Our wood furniture is finished with natural oils and lacquers that enhance its grain.
                                To maintain its luster, dust regularly with a soft, dry cloth. Avoid direct sunlight
                                and extreme temperature changes to prevent warping or fading.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Daily Care</h3>
                                <ul className="space-y-4 text-gray-500 font-light list-disc list-outside ml-5">
                                    <li>Wipe spills immediately with a clean, dry cloth to prevent water marks.</li>
                                    <li>Use coasters and placemats to protect surfaces from heat and moisture.</li>
                                    <li>Dust frequently with a microfiber cloth.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Periodic Maintenance</h3>
                                <ul className="space-y-4 text-gray-500 font-light list-disc list-outside ml-5">
                                    <li>Apply a high-quality furniture wax or oil every 6-12 months to nourish the wood.</li>
                                    <li>Avoid commercial polishes containing silicone, which can build up over time.</li>
                                    <li>If scratches occur, consult a professional refinisher for best results.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Upholstery Care */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="sticky top-32 md:order-2">
                            <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800"
                                    alt="Fabric Care"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Upholstery & Fabrics</h2>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Our bespoke fabrics are chosen for both texture and durability. Regular maintenance
                                ensures they remain fresh and inviting for years.
                            </p>
                        </div>
                        <div className="space-y-12 md:order-1">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Routine Cleaning</h3>
                                <ul className="space-y-4 text-gray-500 font-light list-disc list-outside ml-5">
                                    <li>Vacuum upholstery weekly with a soft brush attachment to remove dust and debris.</li>
                                    <li>Rotate cushions regularly to ensure even wear and prevent fading.</li>
                                    <li>Fluff pillows and cushions to maintain their shape and loft.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Spot Cleaning</h3>
                                <ul className="space-y-4 text-gray-500 font-light list-disc list-outside ml-5">
                                    <li>Blot spills immediately with a clean, white cloth. Do not rub, as this spreads the stain.</li>
                                    <li>For tough stains, consult a professional upholstery cleaner.</li>
                                    <li>Test any cleaning solvents on an inconspicuous area first.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100" />

                    {/* Leather Care */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="sticky top-32">
                            <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800"
                                    alt="Leather Care"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">Leather</h2>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Genuine leather develops a beautiful patina over time. It is a natural material that
                                requires breathability and gentle care.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">Guidelines</h3>
                                <ul className="space-y-4 text-gray-500 font-light list-disc list-outside ml-5">
                                    <li>Dust with a dry, soft cloth.</li>
                                    <li>Keep leather furniture at least 2 feet away from heat sources to prevent cracking.</li>
                                    <li>Avoid using saddle soap, oils, or improper cleaners.</li>
                                    <li>Use a dedicated leather conditioner once or twice a year to keep it supple.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MaintenancePage;
