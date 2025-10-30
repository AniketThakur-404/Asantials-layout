// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// The top-most marquee bar
const marqueeItems = [
  "ASANTIALS",
  "NEW ARRIVALS WEEKLY",
  "EXPRESS SHIPPING",
  "MEMBERS ONLY DROPS",
  "LIMITED EDITION RELEASES",
];

const TopAnnouncement = () => (
  <div className="relative h-16 w-full overflow-hidden bg-neutral-900 text-white">
    <div className="marquee-vertical text-[10px] uppercase tracking-[0.35em]">
      <div className="marquee-vertical__group">
        {marqueeItems.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
      <div
        aria-hidden
        className="marquee-vertical__group"
      >
        {marqueeItems.map((item, idx) => (
          <span key={`duplicate-${idx}`}>{item}</span>
        ))}
      </div>
    </div>
  </div>
);

const Layout = () => {
  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen flex flex-col">
      <TopAnnouncement />
      <Navbar />
      
      <main className="flex-grow">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
