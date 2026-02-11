"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const PrivacyPolicyPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-24 w-full">
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-tight">Privacy Policy</h1>

                <div className="prose prose-lg text-gray-500 font-light leading-relaxed space-y-8">
                    <p>
                        Your privacy is important to us. Maishaa is committed to protecting your personal information and ensuring transparency in how we handle it. This policy outlines our practices regarding data collection, usage, and protection.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Information Collection</h2>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and postal address when you interact with our website, place an order, or subscribe to our newsletter. We also collect non-personal information like browsing behavior and device data to improve your experience.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Use of Information</h2>
                    <p>
                        Your information helps us fulfill orders, provide customer support, and personalize our services. We may also use it to communicate updates, promotions, and relevant content, strictly with your consent. We do not sell or rent your personal data to third parties.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Data Security</h2>
                    <p>
                        We implement rigorous security measures to protect your data from unauthorized access, alteration, or disclosure. Standard encryption protocols (SSL) are used for all sensitive transactions. While we strive for absolute security, no method of transmission over the internet is 100% secure.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Cookies</h2>
                    <p>
                        Our website uses cookies to enhance functionality and analyze traffic. You can choose to disable cookies through your browser settings, though some features of our site may not function properly without them.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for the latest information.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our Privacy Policy, please contact us at privacy@maishaa.com.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
