import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#a67f5e] text-[#faf7f2] font-body py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-[1920px] mx-auto">

        {/* Footer Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Columns 1-4: Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* About Us */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium tracking-tight">About Us</h4>
              <ul className="space-y-4 text-sm font-light opacity-90">
                <li><Link href="/about" className="hover:opacity-70 transition-opacity">Why Us</Link></li>
                <li><Link href="/testimonials" className="hover:opacity-70 transition-opacity">Testimonials</Link></li>
                <li><Link href="/awards" className="hover:opacity-70 transition-opacity">Awards & Recognition</Link></li>
                <li><Link href="/measure" className="hover:opacity-70 transition-opacity">Measure Your Space</Link></li>
                <li><Link href="/maintenance" className="hover:opacity-70 transition-opacity">Care and Maintenance</Link></li>
                <li><Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link></li>
                <li><Link href="/contact" className="hover:opacity-70 transition-opacity">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium tracking-tight">Services</h4>
              <ul className="space-y-4 text-sm font-light opacity-90">
                <li><Link href="/partner" className="hover:opacity-70 transition-opacity">Partner Program</Link></li>
                <li><Link href="/projects" className="hover:opacity-70 transition-opacity">Design Projects</Link></li>
                <li><Link href="/collaborators" className="hover:opacity-70 transition-opacity">Collaborators</Link></li>
                <li><Link href="/faq" className="hover:opacity-70 transition-opacity">FAQ</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium tracking-tight">Shop</h4>
              <ul className="space-y-4 text-sm font-light opacity-90">
                <li><Link href="/furniture" className="hover:opacity-70 transition-opacity">Furniture</Link></li>
                <li><Link href="/collections" className="hover:opacity-70 transition-opacity">Collections</Link></li>
                <li><Link href="/accents" className="hover:opacity-70 transition-opacity">Accents</Link></li>
                <li><Link href="/art" className="hover:opacity-70 transition-opacity">Art</Link></li>
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium tracking-tight">Policies</h4>
              <ul className="space-y-4 text-sm font-light opacity-90">
                <li><Link href="/privacy-policy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link></li>
                <li><Link href="/return-refund-policy" className="hover:opacity-70 transition-opacity">Return Policy</Link></li>
                <li><Link href="/shipping-policy" className="hover:opacity-70 transition-opacity">Shipping Policy</Link></li>
                <li><Link href="/warranty-policy" className="hover:opacity-70 transition-opacity">Warranty Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <p className="text-lg font-medium leading-tight">
                Sign up for emails packed with finds and inspiration
              </p>
              <div className="flex flex-col sm:flex-row border border-[#faf7f2]/30">
                <input
                  type="email"
                  placeholder="Enter Your Email Id"
                  className="bg-transparent px-4 py-3 text-sm flex-1 outline-none placeholder:text-[#faf7f2]/50 border-b sm:border-b-0 sm:border-r border-[#faf7f2]/30"
                />
                <button className="bg-black text-[#faf7f2] px-8 py-3 text-sm font-medium hover:bg-black/80 transition-colors uppercase tracking-wider w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <Link href="#" className="hover:opacity-70 transition-opacity"><Facebook size={24} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity"><Youtube size={24} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity"><Instagram size={24} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity"><Twitter size={24} strokeWidth={1.5} /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Logo & Copyright */}
        <div className="mt-20 pt-10 border-t border-[#faf7f2]/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/logo-1.png"
              alt="MAISHAA FURNITURE"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-xs font-light opacity-60 tracking-wider text-center md:text-right">
            Copyright © 2026 Maishaa Furniture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
