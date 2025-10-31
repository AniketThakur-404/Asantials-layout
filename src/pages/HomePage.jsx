// src/pages/HomePage.jsx
import React from 'react';
import HeroWith3D from '../components/HeroWith3D';
import ProductGrid from '../components/ProductGrid';
import VideoBanner from '../components/VideoBanner';
import StoreGrid from '../components/StoreGrid';
import { latestDrop, moreFrom } from '../data/appData';
import heroVideo from '../assets/Coin_in_Nature_Climate_Video.mp4';


export default function HomePage() {
  return (
    <>
      <div className="relative">
        <HeroWith3D heroVideoSrc={heroVideo} />
      </div>

      <div className="relative z-10 -mt-16 sm:-mt-24">
        <ProductGrid title="Latest Drop" products={latestDrop} />
      </div>

      <div className="relative z-10">
        <VideoBanner />
      </div>

      <div className="relative z-10">
        <ProductGrid title="More From Asantials" products={moreFrom} />
      </div>

      <div className="relative z-10">
        <StoreGrid />
      </div>
    </>
  );
}
