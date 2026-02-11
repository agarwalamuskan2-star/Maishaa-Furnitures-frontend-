"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const WarrantyPolicyPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-24 w-full">
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-tight">Warranty Policy</h1>

                <div className="prose prose-lg text-gray-500 font-light leading-relaxed space-y-8">
                    <p>
                        Maishaa Furniture stands behind the quality and craftsmanship of our products. We offer a comprehensive warranty to ensure your peace of mind.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">5-Year Structural Warranty</h2>
                    <p>
                        We warrant that the structural frame of our furniture, including solid wood and metal components, will be free from defects in material and workmanship for a period of five (5) years from the date of delivery. This covers issues like frame cracks, joint separation, and structural failure under normal residential use.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">1-Year Limited Warranty</h2>
                    <p>
                        For upholstery, fabrics, leathers, cushions, and finishes, we offer a one (1) year warranty against defects such as abnormal fading, peeling, or stitching failure. This does not cover normal wear and tear, softening of cushions, or damage caused by improper cleaning methods.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Exclusions</h2>
                    <p>
                        This warranty does not cover:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Damage resulting from misuse, abuse, negligence, or accidents.</li>
                        <li>Commercial use (unless specified in a trade contract).</li>
                        <li>Exposure to extreme environmental conditions (sunlight, humidity).</li>
                        <li>Modifications or repairs performed by unauthorized parties.</li>
                        <li>Clearance or "As-Is" items.</li>
                    </ul>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Claim Process</h2>
                    <p>
                        To file a warranty claim, please contact our customer support team at support@maishaa.com with your order number, a description of the issue, and clear photographs of the defect. We will assess the claim and, at our discretion, repair or replace the defective item.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WarrantyPolicyPage;
