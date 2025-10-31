// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const marqueeItems = [
  'ASANTIALS',
  'NEW ARRIVALS WEEKLY',
  'EXPRESS SHIPPING',
  'MEMBERS ONLY DROPS',
  'LIMITED EDITION RELEASES',
];

const TopAnnouncement = () => (
  <div
    className="relative h-16 w-full overflow-hidden bg-neutral-900 text-white"
    role="marquee"
    aria-label="Site announcements vertical marquee"
  >
    <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="marquee-vertical group h-full text-[10px] uppercase tracking-[0.35em]">
        <div className="marquee-vertical__group">
          {marqueeItems.map((item, idx) => (
            <span className="marquee-vertical__item" key={item || idx}>
              {item}
            </span>
          ))}
        </div>

        <div aria-hidden className="marquee-vertical__group">
          {marqueeItems.map((item, idx) => (
            <span className="marquee-vertical__item" key={`${item || idx}-duplicate`}>
              {item}
            </span>
          ))}
        </div>
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
