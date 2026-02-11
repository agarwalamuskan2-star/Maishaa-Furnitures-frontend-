"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, X, User, Search, Heart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AuthModal from "@/components/modals/AuthModal";
import SearchOverlay from "@/components/modals/SearchOverlay";
import CartSidebar from "@/components/modals/CartSidebar";
import WishlistSidebar from "@/components/modals/WishlistSidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

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
    { name: "Catalogs", href: "/catalogs" },
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
      <div className="w-full border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-[70px] flex items-center justify-between gap-4 md:gap-8">
          {/* Logo (Left) */}
          <div className={`flex-shrink-0 transition-all duration-300 ${isSearchActive ? 'opacity-0 md:opacity-100 w-0 md:w-auto overflow-hidden' : 'opacity-100'}`}>
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

          {/* Center Section: Links or Search Bar */}
          <div className="flex-1 flex items-center justify-center relative min-w-0">
            <AnimatePresence mode="wait">
              {!isSearchActive ? (
                <motion.div
                  key="links"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="hidden lg:flex items-center space-x-8"
                >
                  {mainHeaderLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-[13px] text-gray-700 hover:text-black transition-colors font-medium uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="search"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '100%' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex items-center bg-transparent w-full max-w-2xl px-4"
                >
                  <Search size={18} className="text-gray-400 mr-3 shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full bg-transparent outline-none h-10 text-sm md:text-base font-light placeholder:text-gray-300"
                  />
                  <button
                    onClick={() => setIsSearchActive(false)}
                    className="ml-2 p-1 text-gray-400 hover:text-black transition-colors"
                  >
                    <X size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Utility Icons (Right) */}
          <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1 text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden sm:flex items-center space-x-6">
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center text-gray-700 hover:text-black transition-colors gap-2 text-sm font-medium"
              >
                <User size={20} />
                <span className="hidden xl:inline">Login</span>
              </button>
              {!isSearchActive && (
                <button
                  onClick={() => setIsSearchActive(true)}
                  className="text-gray-700 hover:text-black transition-colors"
                  aria-label="Search"
                >
                  <Search size={22} strokeWidth={1.5} />
                </button>
              )}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={22} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-black transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
              </button>
            </div>
            {/* Mobile Only Icons (simplified for space) */}
            <div className="flex sm:hidden items-center space-x-4">
              <button
                onClick={() => setIsSearchActive(true)}
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-black transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals and Overlays */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />

      {/* 3. Secondary Navigation Bar with Dropdowns - Hidden on Mobile */}
      <div className="hidden lg:block w-full bg-white border-b border-gray-100">
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
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="flex items-center gap-2 text-base font-medium text-gray-800 w-full text-left"
              >
                <User size={20} />
                Login / Register
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="flex items-center gap-2 text-base font-medium text-gray-800 w-full text-left"
              >
                <Heart size={20} />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
