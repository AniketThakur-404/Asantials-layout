// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// The top-most marquee bar
const TopAnnouncement = () => (
  <div className="bg-neutral-900 text-white">
    <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-4">
      <span className="text-[10px] uppercase tracking-[0.4em] text-white/80">
        Extension Of Your Expression
      </span>
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
