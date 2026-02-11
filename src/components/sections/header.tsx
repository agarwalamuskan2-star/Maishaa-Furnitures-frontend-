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
      megaMenu: {
        columns: [
          {
            title: "Latest Edition",
            links: [
              { name: "Monocraft Collection", href: "/collections/monocraft" },
              { name: "Incurve Episodes", href: "/collections/incurve" },
              { name: "Apartment Living", href: "/collections/apartment" },
              { name: "Veda Sangrah", href: "/collections/veda" },
              { name: "French Country Collection", href: "/collections/french" },
              { name: "Foster Living", href: "/collections/foster" },
              { name: "Manhattan Collection", href: "/collections/manhattan" },
            ]
          },
          {
            title: "Signature Line",
            links: [
              { name: "Copenhagen Curves", href: "/collections/copenhagen" },
              { name: "Jess Design", href: "/collections/jess" },
              { name: "Verandah Collection", href: "/collections/verandah" },
              { name: "Miller Lounge Series", href: "/collections/miller" },
              { name: "Advi Series", href: "/collections/advi" },
              { name: "Saturn Table Collection", href: "/collections/saturn" },
              { name: "Bombay Club Collection", href: "/collections/bombay" },
              { name: "Travancore Roots", href: "/collections/travancore" },
            ]
          },
          {
            title: "Exclusive Edit",
            links: [
              { name: "Isles of Greece", href: "/collections/isles" },
              { name: "Ebba 2.0", href: "/collections/ebba-2" },
              { name: "Home and Cottage", href: "/collections/home-cottage" },
              { name: "Chandigarh Sangrah", href: "/collections/chandigarh" },
              { name: "Ebba Collection", href: "/collections/ebba" },
              { name: "Kobbler Collection", href: "/collections/kobbler" },
              { name: "Mianzi", href: "/collections/mianzi" },
            ]
          }
        ],
        image: {
          src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
          alt: "Featured Collection"
        }
      }
    },
    {
      name: "Furniture",
      href: "/furniture",
      megaMenu: {
        columns: [
          {
            title: "Entryway",
            links: [
              { name: "Shoe Racks", href: "/furniture/shoe-racks" },
              { name: "Console Tables", href: "/furniture/console-tables" },
              { name: "Benches", href: "/furniture/benches" },
              { name: "Swing", href: "/furniture/swing" },
            ]
          },
          {
            title: "Living",
            links: [
              { name: "Sofas & Sectionals", href: "/furniture/sofas-sectionals" },
              { name: "Chairs & Loveseats", href: "/furniture/chairs-loveseats" },
              { name: "Accent | Lounge Chairs", href: "/furniture/accent-chairs" },
              { name: "Daybeds & Diwans", href: "/furniture/daybeds" },
              { name: "Coffee Tables", href: "/furniture/coffee-tables" },
              { name: "End Tables", href: "/furniture/end-tables" },
              { name: "Ottomans | Stools & Benches", href: "/furniture/living-stools" },
              { name: "Loungers", href: "/furniture/loungers" },
              { name: "Consoles", href: "/furniture/living-consoles" },
            ]
          },
          {
            title: "Dining",
            links: [
              { name: "Dining Collections", href: "/furniture/dining-collections" },
              { name: "Dining Tables", href: "/furniture/dining-tables" },
              { name: "Dining Chairs", href: "/furniture/dining-chairs" },
              { name: "Dining Benches", href: "/furniture/dining-benches" },
              { name: "Bar & Counter Stools", href: "/furniture/bar-stools" },
              { name: "Buffet Consoles", href: "/furniture/buffet-consoles" },
              { name: "Bar Cabinets", href: "/furniture/bar-cabinets" },
            ]
          },
          {
            title: "Bedroom",
            links: [
              { name: "Beds", href: "/furniture/beds" },
              { name: "Nightstands", href: "/furniture/nightstands" },
              { name: "Chest of Drawers", href: "/furniture/bedroom-drawers" },
              { name: "Armoires | Wardrobes", href: "/furniture/wardrobes" },
              { name: "Ottomans & Benches", href: "/furniture/bedroom-benches" },
            ],
            subTitle: "Home Office",
            subLinks: [
              { name: "Writing Desk", href: "/furniture/writing-desk" },
              { name: "Writing Chair", href: "/furniture/writing-chair" },
            ]
          },
          {
            title: "Storage & Modular Furniture",
            links: [
              { name: "Media Consoles", href: "/furniture/media-consoles" },
              { name: "Bookcases & Shelves", href: "/furniture/bookcases" },
              { name: "Buffet & Sideboard Consoles", href: "/furniture/buffets" },
              { name: "Chest of Drawers", href: "/furniture/storage-drawers" },
              { name: "Bedside Tables", href: "/furniture/bedside-tables" },
              { name: "Console Tables", href: "/furniture/storage-consoles" },
              { name: "Wardrobes", href: "/furniture/storage-wardrobes" },
              { name: "Modular Storage Units", href: "/furniture/modular-storage" },
            ]
          },
          {
            title: "Ready to Ship",
            links: [
              { name: "In Stock Furniture", href: "/furniture/ready-to-ship" },
            ]
          }
        ]
      }
    },
    {
      name: "Outdoor",
      href: "/outdoor",
      megaMenu: {
        columns: [
          {
            title: "Outdoor Lounge",
            links: [
              { name: "Outdoor Sofas & Sectionals", href: "/outdoor/sofas-sectionals" },
              { name: "Outdoor Lounge Chairs", href: "/outdoor/lounge-chairs" },
              { name: "Outdoor Gazebo Daybed", href: "/outdoor/gazebo-daybed" },
              { name: "Outdoor Coffee Tables", href: "/outdoor/coffee-tables" },
              { name: "Outdoor Ottomans", href: "/outdoor/ottomans" },
            ]
          },
          {
            title: "Outdoor Dining",
            links: [
              { name: "Outdoor Tables", href: "/outdoor/tables" },
              { name: "Outdoor Chairs & Benches", href: "/outdoor/chairs-benches" },
            ],
            subTitle: "Outdoor Patio | Balcony",
            subLinks: []
          },
          {
            title: "Outdoor Decor",
            links: []
          }
        ]
      }
    },
    {
      name: "Decor",
      href: "/decor",
      megaMenu: {
        columns: [
          {
            title: "Mirrors",
            links: [
              { name: "Wall Mirrors", href: "/decor/mirrors/wall" },
              { name: "Floor Mirrors", href: "/decor/mirrors/floor" },
              { name: "Decorative Mirrors", href: "/decor/mirrors/decorative" },
            ]
          },
          {
            title: "Decorative Objects",
            links: [
              { name: "Decor Pieces", href: "/decor/objects/pieces" },
              { name: "Bookends", href: "/decor/objects/bookends" },
              { name: "Lanterns & Candle Holders", href: "/decor/objects/lanterns" },
              { name: "Cushions & Runners", href: "/decor/objects/cushions" },
              { name: "Planters", href: "/decor/objects/planters" },
            ]
          },
          {
            title: "Storages",
            links: [
              { name: "Fabric Racks", href: "/decor/storage/fabric-racks" },
              { name: "Bags & Baskets", href: "/decor/storage/bags-baskets" },
            ],
            subTitle: "Clock",
            subLinks: []
          },
          {
            title: "Home Fragrance",
            links: [],
            subTitle: "Pots",
            subLinks: [
              { name: "Candles", href: "/decor/home-fragrance/candles" }
            ],
            // Note: Our current component architecture supports one subTitle. 
            // I will implement candles as a link or a secondary sub-section if needed.
          },
          {
            title: "Art",
            links: [
              { name: "Paintings", href: "/decor/art/paintings" },
              { name: "Sculptures", href: "/decor/art/sculptures" },
              { name: "Decor", href: "/decor/art/decor" },
              { name: "Wall Decor", href: "/decor/art/wall-decor" },
            ]
          }
        ]
      }
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
      <div className="hidden lg:block w-full bg-white border-b border-gray-100 relative group/nav">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-center h-[50px]">
          <nav className="flex items-center space-x-8 xl:space-x-10">
            {secondaryNavLinks.map((link) => (
              <div
                key={link.name}
                className="group"
                onMouseEnter={() => (link.dropdown || link.megaMenu) && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="relative">
                  <Link
                    href={link.href}
                    className={`text-sm hover:text-black transition-colors flex items-center gap-1 py-4 ${link.className || "text-gray-600"}`}
                  >
                    {link.name}
                    {(link.dropdown || link.megaMenu) && <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Standard Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-[1px] bg-white shadow-lg border border-gray-100 rounded-b-md py-4 min-w-[200px] z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Mega Menu - Positioned relative to the full nav row */}
                {link.megaMenu && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50 overflow-hidden"
                  >
                    <div className={`max-w-[1920px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-12 grid ${link.megaMenu.image ? 'grid-cols-4' : 'grid-cols-6'} gap-12`}>
                      <div className={`${link.megaMenu.image ? 'col-span-3 grid grid-cols-3' : 'col-span-6 grid grid-cols-6'} gap-x-12 gap-y-16`}>
                        {(link.megaMenu.columns as any[]).map((column, idx) => (
                          <div key={idx} className="space-y-6">
                            <h4 className="text-[11px] text-gray-400 uppercase tracking-[0.4em] font-bold border-b border-gray-50 pb-3">
                              {column.title}
                            </h4>
                            <ul className="space-y-3.5">
                              {column.links.map((item: any, i: number) => (
                                <li key={i}>
                                  <Link
                                    href={item.href}
                                    className="text-[14px] text-gray-600 hover:text-black transition-colors font-light block tracking-wide"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {column.subTitle && (
                              <div className="pt-4 space-y-6">
                                <h4 className="text-[11px] text-gray-400 uppercase tracking-[0.4em] font-bold border-b border-gray-50 pb-3">
                                  {column.subTitle}
                                </h4>
                                <ul className="space-y-3.5">
                                  {column.subLinks?.map((item: any, i: number) => (
                                    <li key={i}>
                                      <Link
                                        href={item.href}
                                        className="text-[14px] text-gray-600 hover:text-black transition-colors font-light block tracking-wide"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {link.megaMenu.image && (
                        <div className="relative h-full min-h-[400px] bg-gray-50 overflow-hidden group/img">
                          <Image
                            src={link.megaMenu.image.src}
                            alt={link.megaMenu.image.alt}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                          <div className="absolute bottom-10 left-0 right-0 text-white text-center px-6">
                            <p className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-80 mb-2">Selected</p>
                            <h5 className="text-2xl font-serif">Curated Collections</h5>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
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
                  {link.megaMenu && (
                    <div className="ml-4 mt-3 space-y-6">
                      {(link.megaMenu.columns as any[]).map((column, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">{column.title}</p>
                          <div className="space-y-2">
                            {column.links.map((item: any, i: number) => (
                              <Link
                                key={i}
                                href={item.href}
                                className="block text-sm text-gray-500"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>

                          {column.subTitle && (
                            <div className="pt-2 space-y-2">
                              <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold">{column.subTitle}</p>
                              <div className="space-y-2">
                                {column.subLinks?.map((item: any, i: number) => (
                                  <Link
                                    key={i}
                                    href={item.href}
                                    className="block text-sm text-gray-500"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
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
