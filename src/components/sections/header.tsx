"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/cart-context";
import { useFavorites } from "@/context/favorites-context";
import Image from "next/image";
import { ShoppingBag, Menu, X, User, Search, Heart, ChevronDown, LogOut, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AuthModal from "@/components/modals/AuthModal";
import SearchOverlay from "@/components/modals/SearchOverlay";
import CartSidebar from "@/components/modals/CartSidebar";
import WishlistSidebar from "@/components/modals/WishlistSidebar";
import { useSession, signOut } from "next-auth/react";

interface NavItem {
  name: string;
  href: string;
}

interface MegaMenuColumn {
  title: string;
  links: NavItem[];
  subTitle?: string;
  subLinks?: NavItem[];
}

interface MegaMenu {
  columns: MegaMenuColumn[];
  image?: {
    src: string;
    alt: string;
  };
}

interface NavLink {
  name: string;
  href: string;
  className?: string;
  dropdown?: NavItem[];
  megaMenu?: MegaMenu;
}

// Sample products for search
const allProducts = [
  { id: 1, title: "Iconic Velvet Sofa", price: "₹1,24,900", category: "Living Room", url: "/furniture/sofas-sectionals" },
  { id: 2, title: "Solid Oak Dining Table", price: "₹84,900", category: "Dining Room", url: "/furniture/dining-tables" },
  { id: 3, title: "Artisan Lounge Chair", price: "₹34,600", category: "Living Room", url: "/furniture/accent-chairs" },
  { id: 4, title: "Minimalist Bed Frame", price: "₹72,400", category: "Bedroom", url: "/furniture/bedroom/beds" },
  { id: 5, title: "Glass Coffee Table", price: "₹18,900", category: "Living Room", url: "/furniture/coffee-tables" },
  { id: 6, title: "Woven Pendant Light", price: "₹12,600", category: "Lighting", url: "/decor/lighting/pendant-lights" },
  { id: 7, title: "Modern Floor Lamp", price: "₹22,400", category: "Lighting", url: "/decor/lighting/floor-lamps" },
  { id: 8, title: "Velvet Cushion Set", price: "₹4,500", category: "Decor", url: "/decor/objects/cushions" },
  { id: 9, title: "Oak Nightstand", price: "₹14,900", category: "Bedroom", url: "/furniture/bedroom/nightstands" },
  { id: 10, title: "Outdoor Seating", price: "₹45,000", category: "Outdoor", url: "/outdoor" },
  { id: 11, title: "Bar Stools", price: "₹12,000", category: "Dining", url: "/furniture/dining/bar-stools" },
  { id: 12, title: "Console Tables", price: "₹28,000", category: "Living", url: "/furniture/console-tables" },
];

const Header = () => {
  const { data: session, status } = useSession();
  const { cartCount } = useCart();
  const { addToFavorites, favoritesCount } = useFavorites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Modal States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof allProducts>([]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const searchTerms = searchQuery.toLowerCase().split(' ');
    const filtered = allProducts.filter(product => {
      const searchString = `${product.title} ${product.category}`.toLowerCase();
      return searchTerms.some(term => searchString.includes(term));
    });

    setSearchResults(filtered);
  }, [searchQuery]);

  // Main Header Links
  const mainHeaderLinks: NavLink[] = [
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Design Masters", href: "/design-masters" },
    { name: "Free Design Services", href: "/design-services" },
    { name: "Partner Program", href: "/partner-program" },
  ];

  // Secondary Navigation Links with Dropdowns
  const secondaryNavLinks: NavLink[] = [
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
              { name: "Consoles", href: "/furniture/consoles" },
            ]
          },
          {
            title: "Dining",
            links: [
              { name: "Dining Collections", href: "/furniture/dining-collections" },
              { name: "Dining Tables", href: "/furniture/dining-tables" },
              { name: "Dining Chairs", href: "/furniture/dining-chairs" },
              { name: "Dining Benches", href: "/furniture/dining/dining-benches" },
              { name: "Bar & Counter Stools", href: "/furniture/dining/bar-stools" },
              { name: "Buffet Consoles", href: "/furniture/dining/buffet-consoles" },
              { name: "Bar Cabinets", href: "/furniture/dining/bar-cabinets" },
            ]
          },
          {
            title: "Bedroom",
            links: [
              { name: "Beds", href: "/furniture/bedroom/beds" },
              { name: "Nightstands", href: "/furniture/bedroom/nightstands" },
              { name: "Chest of Drawers", href: "/furniture/bedroom-drawers" },
              { name: "Armoires | Wardrobes", href: "/furniture/wardrobes" },
              { name: "Ottomans & Benches", href: "/furniture/bedroom/ottomans-benches" },
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
              { name: "TV Units", href: "/furniture/storage/tv-units" },
              { name: "Bookcases & Shelves", href: "/furniture/bookcases" },
              { name: "Buffet & Sideboard Consoles", href: "/furniture/buffets" },
              { name: "Chest of Drawers", href: "/furniture/storage-drawers" },
              { name: "Bedside Tables", href: "/furniture/storage/bedside-tables" },
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
    {
      name: "Ready to Ship",
      href: "/ready-to-ship",
      megaMenu: {
        columns: [
          {
            title: "In stock Furniture",
            links: [
              { name: "Sofas & Sectionals", href: "/ready-to-ship/furniture/sofas" },
              { name: "Chairs", href: "/ready-to-ship/furniture/chairs" },
              { name: "Tables", href: "/ready-to-ship/furniture/tables" },
              { name: "Storage", href: "/ready-to-ship/furniture/storage" },
            ]
          },
          {
            title: "In stock Accents",
            links: [
              { name: "Mirrors", href: "/ready-to-ship/accents/mirrors" },
              { name: "Decorative Objects", href: "/ready-to-ship/accents/objects" },
              { name: "Lighting", href: "/ready-to-ship/accents/lighting" },
            ]
          }
        ]
      }
    },
    {
      name: "Shop By Style",
      href: "/shop-by-style",
      megaMenu: {
        columns: [
          { title: "Coastal Farmhouse", links: [{ name: "View Collection", href: "/collections/coastal-farmhouse" }] },
          { title: "Contemporary Modern", links: [{ name: "View Collection", href: "/collections/contemporary-modern" }] },
          { title: "Tropical Modern", links: [{ name: "View Collection", href: "/collections/tropical-modern" }] },
          { title: "Classic Modern", links: [{ name: "View Collection", href: "/collections/classic-modern" }] },
          { title: "Mid-century Modern", links: [] },
        ]
      }
    },
    { name: "Stores", href: "/stores" },
    { name: "Warehouse Sale", href: "/warehouse-sale", className: "text-red-500 font-medium" },
  ];

  const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/logo-1.png";

  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50 bg-white font-sans flex flex-col">
      {/* 1. Announcement Bar */}
      <div className="w-full bg-black text-white py-2 px-4 text-center text-[11px] font-medium tracking-widest uppercase relative">
        Pan India Shipping
        <button className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity">
          <X size={14} />
        </button>
      </div>

      {/* 2. Main Header */}

      <div className="w-full border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-[70px] flex items-center justify-between gap-4 md:gap-8">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 transition-all duration-300">
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
                <div className="relative w-full max-w-2xl">
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex items-center bg-white border border-gray-200 rounded-lg px-4"
                  >
                    <Search size={18} className="text-gray-400 mr-3 shrink-0" />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="What are you looking for?"
                      className="w-full bg-transparent outline-none h-10 text-sm md:text-base font-light placeholder:text-gray-300"
                    />
                    <button
                      onClick={() => {
                        setIsSearchActive(false);
                        setSearchQuery('');
                      }}
                      className="ml-2 p-1 text-gray-400 hover:text-black transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </motion.div>

                  {/* Search Results Dropdown */}
                  {searchQuery.trim() !== '' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
                    >
                      {searchResults.length > 0 ? (
                        <div className="p-2">
                          <p className="text-xs text-gray-400 px-2 py-1">
                            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                          </p>
                          {searchResults.map((product) => (
                            <Link
                              key={product.id}
                              href={product.url}
                              onClick={() => {
                                setIsSearchActive(false);
                                setSearchQuery('');
                              }}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                                <Search size={16} className="text-gray-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                                <p className="text-xs text-gray-500">{product.category} • {product.price}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center">
                          <p className="text-sm text-gray-500">No products found for "{searchQuery}"</p>
                          <p className="text-xs text-gray-400 mt-1">Try searching for furniture, lighting, or decor</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Utility Icons (Right) */}
          <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              {status === "authenticated" ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsUserMenuOpen(true)}
                  onMouseLeave={() => setIsUserMenuOpen(false)}
                >
                  <button className="flex items-center gap-3 py-2 cursor-pointer group">
                    <div className="relative">
                      {session.user?.image ? (
                        <Image
                          src={session.user.image}
                          alt={session.user.name || "User"}
                          width={32}
                          height={32}
                          className="rounded-full ring-2 ring-transparent group-hover:ring-gray-100 transition-all border border-gray-100"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-all">
                          <User size={18} className="text-gray-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-start leading-none pr-1">
                      <span className="text-[13px] font-medium text-black max-w-[120px] truncate">
                        {session.user?.name?.split(' ')[0] || 'Account'}
                      </span>
                      <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-tight font-bold">Account</span>
                    </div>
                    <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-full pt-2 w-64 z-[60]"
                      >
                        <div className="bg-white shadow-2xl border border-gray-100 py-2 rounded-xl overflow-hidden">
                          <div className="px-5 py-4 border-b border-gray-50 bg-gray-50/50">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Authenticated</p>
                            <p className="text-sm font-semibold text-black truncate">{session.user?.name}</p>
                            <p className="text-[11px] text-gray-500 truncate">{session.user?.email}</p>
                          </div>
                          <div className="py-2 px-2">
                            <Link href="/my-orders" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors rounded-lg">
                              <ShoppingBag size={17} strokeWidth={1.5} />
                              My Orders
                            </Link>
                            <Link href="/wishlist" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors rounded-lg">
                              <Heart size={17} strokeWidth={1.5} />
                              Wishlist
                            </Link>
                            <Link href="/account-settings" className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors rounded-lg">
                              <Settings size={17} strokeWidth={1.5} />
                              Account Settings
                            </Link>
                          </div>
                          <div className="px-2 pb-1">
                            <button
                              onClick={() => signOut()}
                              className="w-full flex items-center gap-3 px-3 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors text-left rounded-lg"
                            >
                              <LogOut size={17} strokeWidth={1.5} />
                              <span className="font-bold">Logout</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="flex items-center text-gray-700 hover:text-black transition-colors gap-2 text-sm font-medium"
                >
                  <User size={20} />
                  <span className="hidden xl:inline">Login</span>
                </button>
              )}
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
                className="text-gray-700 hover:text-black transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart size={22} strokeWidth={1.5} />
                {favoritesCount > 0 && (
                  <span
                    suppressHydrationWarning
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {favoritesCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-black transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Icons */}
            <div className="flex lg:hidden items-center space-x-4">
              <button
                onClick={() => setIsSearchActive(true)}
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Search"
              >
                <Search size={22} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-black transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Icon for quick mobile access */}
              {status === "authenticated" ? (
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="relative"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="User"
                      width={24}
                      height={24}
                      className="rounded-full border border-gray-100"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <User size={16} className="text-gray-600" />
                    </div>
                  )}
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="text-gray-700 hover:text-black transition-colors"
                  aria-label="Login"
                >
                  <User size={22} strokeWidth={1.5} />
                </button>
              )}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 text-gray-700 hover:text-black transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Horizontal Sub-menu */}
      <div className="lg:hidden w-full bg-white border-b border-gray-100 overflow-x-auto no-scrollbar py-3 px-4 flex items-center">
        <div className="flex items-center space-x-6 whitespace-nowrap min-w-max">
          {secondaryNavLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className={`text-[11px] font-medium uppercase tracking-wider ${link.className || "text-gray-800"
                  }`}
              >
                {link.name}
              </Link>
              {index < secondaryNavLinks.length - 1 && (
                <span className="text-gray-300 text-[10px]">•</span>
              )}
            </React.Fragment>
          ))}
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
                      {link.dropdown.map((item: NavItem) => (
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
                        {link.megaMenu.columns.map((column: MegaMenuColumn, idx: number) => (
                          <div key={idx} className="space-y-6">
                            <h4 className="text-[11px] text-gray-400 uppercase tracking-[0.4em] font-bold border-b border-gray-50 pb-3">
                              {column.title}
                            </h4>
                            <ul className="space-y-3.5">
                              {column.links.map((item: NavItem, i: number) => (
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
                                  {column.subLinks?.map((item: NavItem, i: number) => (
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
                            <h5 className="text-2xl font-light italic">Curated Collections</h5>
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
      {
        isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto border-t border-gray-200">
            <div className="flex flex-col p-6 space-y-8 pb-32">
              {/* Auth Section at Top for Mobile */}
              {status === "authenticated" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    {session.user?.image ? (
                      <Image src={session.user.image} alt="Profile" width={50} height={50} className="rounded-full shadow-sm border-2 border-white" />
                    ) : (
                      <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <User size={24} />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-gray-900 truncate">{session.user?.name}</p>
                      <p className="text-[11px] text-gray-500 truncate mt-0.5">{session.user?.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/my-orders" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all active:scale-95 bg-white">
                      <ShoppingBag size={20} className="text-gray-700" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tighter">Orders</span>
                    </Link>
                    <Link href="/wishlist" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all active:scale-95 bg-white">
                      <Heart size={20} className="text-gray-700" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tighter">Wishlist</span>
                    </Link>
                  </div>

                  <button
                    onClick={() => signOut()}
                    className="flex items-center justify-center gap-3 w-full h-12 bg-red-50 text-red-600 rounded-xl text-[12px] font-bold transition-all hover:bg-red-100 active:scale-[0.98]"
                  >
                    <LogOut size={18} />
                    SIGN OUT
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAuthOpen(true);
                  }}
                  className="flex items-center justify-center gap-3 h-14 bg-black text-white rounded-2xl w-full text-sm font-bold shadow-lg shadow-black/10 active:scale-[0.98] transition-transform"
                >
                  <User size={20} />
                  LOG IN / REGISTER
                </button>
              )}

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
                        {link.dropdown.map((item: NavItem) => (
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
                        {link.megaMenu.columns.map((column: MegaMenuColumn, idx: number) => (
                          <div key={idx} className="space-y-2">
                            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">{column.title}</p>
                            <div className="space-y-2">
                              {column.links.map((item: NavItem, i: number) => (
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
                                  {column.subLinks?.map((item: NavItem, i: number) => (
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


            </div>
          </div>
        )
      }
    </header >
  );
};

export default Header;
