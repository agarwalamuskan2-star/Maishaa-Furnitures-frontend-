"use client";

import React from "react";
import Link from "next/link";
import { Home, Grid, Heart, User } from "lucide-react";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Category", href: "/furniture", icon: Grid },
        { name: "Wishlist", href: "/wishlist", icon: Heart },
        { name: "Account", href: "/account", icon: User },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 flex items-center justify-around h-16 px-4 pb-safe">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center justify-center space-y-1 ${isActive ? "text-primary" : "text-gray-500"
                            }`}
                    >
                        <Icon size={20} className={isActive ? "text-[#f39c12]" : "text-gray-600"} />
                        <span className={`text-[10px] font-medium ${isActive ? "text-[#f39c12]" : "text-gray-600 uppercase"}`}>
                            {item.name}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};

export default BottomNavigation;
