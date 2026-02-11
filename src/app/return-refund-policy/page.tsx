"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const ReturnRefundPolicyPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-24 w-full">
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 tracking-tight">Return & Refund Policy</h1>

                <div className="prose prose-lg text-gray-500 font-light leading-relaxed space-y-8">
                    <p>
                        We want you to love your Maishaa furniture. If for any reason you are not completely satisfied, our return process is designed to be straightforward and fair.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Standard Return Window</h2>
                    <p>
                        We accept returns on eligible items within 30 days of delivery. To be eligible for a return, the item must be in its original condition, unused, and in its original packaging.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Return Shipping</h2>
                    <p>
                        Return shipping costs are the responsibility of the customer, unless the return is due to a manufacturing defect or shipping error on our part. We can arrange for a pickup with our logistics partners, and the cost will be deducted from your refund amount.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Custom Orders</h2>
                    <p>
                        Items that are made-to-order, customized with specific fabrics/finishes, or modified at your request are final sale and cannot be returned unless they arrive damaged or defective.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Damaged Items</h2>
                    <p>
                        Please inspect your delivery immediately upon arrival. If you notice any damage to the packaging or the product itself, note it on the delivery receipt and contact us within 48 hours. We will promptly arrange for a replacement or repair.
                    </p>

                    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6">Refunds</h2>
                    <p>
                        Once your return is received and inspected at our warehouse (typically within 5-7 business days), we will process your refund to the original method of payment. Please allow an additional 3-5 business days for your bank to post the credit. Original shipping charges are non-refundable.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ReturnRefundPolicyPage;
