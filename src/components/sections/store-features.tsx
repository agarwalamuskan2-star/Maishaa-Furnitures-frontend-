"use client";

import React from "react";
import { PenTool, Heart, Users, Globe } from "lucide-react";

const StoreFeatures = () => {
    const features = [
        {
            icon: PenTool,
            title: "Good Design",
            description: "Designs that speak of aesthetics and functionality!"
        },
        {
            icon: Heart,
            title: "Good For You",
            description: "Every shipment is insured, every payment is secure with us!"
        },
        {
            icon: Users,
            title: "Good For People",
            description: "We are here listening to your custom needs or any other requirements!"
        },
        {
            icon: Globe,
            title: "Good For Planet",
            description: "Keeping in mind all regulations that benefits all."
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-8 bg-white border-t border-gray-100">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4">
                        <div className="mb-2">
                            <feature.icon size={48} strokeWidth={1} className="text-gray-900" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-[250px] mx-auto">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StoreFeatures;
