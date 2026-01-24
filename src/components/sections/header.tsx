"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, X, User, Search, Heart, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Main Header Links
  const mainHeaderLinks = [
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Design Masters", href: "/design-masters" },
    { name: "Free Design Services", href: "/design-services" },
    { name: "Partner Program", href: "/partner-program" },
  ];

  // Secondary Navigation Links with Dropdowns
  const secondaryNavLinks = [
    { name: "New", href: "/new" },
    {
      name: "Collections",
      href: "/collections",
      dropdown: [
        { name: "Living Room", href: "/collections/living-room" },
        { name: "Bedroom", href: "/collections/bedroom" },
        { name: "Dining Room", href: "/collections/dining-room" },
        { name: "Home Office", href: "/collections/home-office" },
      ]
    },
    {
      name: "Furniture",
      href: "/furniture",
      dropdown: [
        { name: "Sofas", href: "/furniture/sofas" },
        { name: "Chairs", href: "/furniture/chairs" },
        { name: "Tables", href: "/furniture/tables" },
        { name: "Storage", href: "/furniture/storage" },
        { name: "Beds", href: "/furniture/beds" },
      ]
    },
    {
      name: "Outdoor",
      href: "/outdoor",
      dropdown: [
        { name: "Outdoor Seating", href: "/outdoor/seating" },
        { name: "Outdoor Dining", href: "/outdoor/dining" },
        { name: "Outdoor Accessories", href: "/outdoor/accessories" },
      ]
    },
    {
      name: "Decor",
      href: "/decor",
      dropdown: [
        { name: "Lighting", href: "/decor/lighting" },
        { name: "Rugs", href: "/decor/rugs" },
        { name: "Wall Art", href: "/decor/wall-art" },
        { name: "Accessories", href: "/decor/accessories" },
      ]
    },
    { name: "Catalog", href: "/catalog" },
    { name: "Projects", href: "/projects" },
    { name: "Ready to Ship", href: "/ready-to-ship" },
    { name: "Shop By Style", href: "/shop-by-style" },
    { name: "Stores", href: "/stores" },
    { name: "Warehouse Sale", href: "/warehouse-sale", className: "text-red-500 font-medium" },
  ];

  const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/logo-1.png";

  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50 bg-white font-sans flex flex-col">
      {/* 2. Main Header */}
      <div className="w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-[70px] flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={logoAsset}
                alt="Maisha Furnitures"
                width={180}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Main Links (Center) - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainHeaderLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-700 hover:text-black transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Utility Icons (Right) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1 text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden sm:flex items-center space-x-6">
              <Link href="/login" className="flex items-center text-gray-700 hover:text-black transition-colors gap-2 text-sm font-medium">
                <User size={20} />
                <span>Login</span>
              </Link>
              <button className="text-gray-700 hover:text-black transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-black transition-colors" aria-label="Wishlist">
                <Heart size={20} />
              </button>
              <button className="text-gray-700 hover:text-black transition-colors relative" aria-label="Cart">
                <ShoppingBag size={20} />
              </button>
            </div>
            {/* Mobile Only Icons (simplified for space) */}
            <div className="flex sm:hidden items-center space-x-4">
              <button className="text-gray-700 hover:text-black transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-black transition-colors relative" aria-label="Cart">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Secondary Navigation Bar with Dropdowns - Hidden on Mobile */}
      <div className="hidden lg:block w-full bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-center h-[50px]">
          <nav className="flex items-center space-x-8 xl:space-x-10">
            {secondaryNavLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-sm hover:text-black transition-colors flex items-center gap-1 ${link.className || "text-gray-600"}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="mt-0.5" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg border border-gray-100 rounded-md py-2 min-w-[200px] z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto border-t border-gray-200">
          <div className="flex flex-col p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Menu</h3>
              {mainHeaderLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Categories</h3>
              {secondaryNavLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block text-base font-medium text-gray-600 ${link.className || ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              <Link
                href="/login"
                className="flex items-center gap-2 text-base font-medium text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
                Login / Register
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-base font-medium text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={20} />
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;