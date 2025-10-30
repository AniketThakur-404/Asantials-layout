// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ShippingStripe = () => (
  <div className="w-full bg-neutral-900 text-white">
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.2em] py-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="whitespace-nowrap opacity-90">SHIPPING WORLDWIDE</span>
        ))}
      </div>
    </div>
  </div>
);

const SiteFooter = () => (
  <footer className="bg-white border-t border-neutral-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center">
          <span className="font-serif italic text-4xl uppercase">Asantials</span>
        </div>
        <div className="text-sm grid grid-cols-2 gap-8">
          <div>
            <div className="uppercase text-neutral-500 text-[11px] tracking-widest mb-3">Help</div>
            <ul className="space-y-2 text-neutral-700">
              <li><Link to="/login" className="hover:underline">Members Login</Link></li>
              <li><Link to="/returns" className="hover:underline">Place an Exchange/Return Request</Link></li>
              <li><Link to="/policy" className="hover:underline">Exchange/Returns Policy</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <div className="uppercase text-neutral-500 text-[11px] tracking-widest mb-3">Company</div>
            <ul className="space-y-2 text-neutral-700">
              <li><Link to="/story" className="hover:underline">Story</Link></li>
              <li><Link to="/stores" className="hover:underline">Our Stores</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/collaborations" className="hover:underline">Collaborations</Link></li>
              <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-sm">
          <div className="uppercase text-neutral-500 text-[11px] tracking-widest mb-3">Connect</div>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="underline">YouTube</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
          </div>
          <p className="text-[11px] text-neutral-500 mt-6">© 2025 ASANTIALS Retail Private Limited, All Rights Reserved.</p>
        </div>
      </div>
    </div>
    <div className="bg-neutral-900 text-white text-[10px] tracking-[0.2em] text-center py-2">CONNECT</div>
    <div className="mx-auto max-w-7xl px-4 py-6 text-[11px] text-neutral-500">
      <div className="uppercase tracking-widest mb-2">Popular Searches</div>
      <p>
        Oversized T‑Shirts, Hoodies, Acid Wash T‑Shirts, Designer Tees, Casual Jackets, Black Hoodies, Printed Sweatshirts…
      </p>
    </div>
  </footer>
);

const Footer = () => (
    <>
        <ShippingStripe />
        <SiteFooter />
    </>
)

export default Footer;
