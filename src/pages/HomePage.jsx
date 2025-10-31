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
      {/* Immersive hero video */}
      <HeroWith3D heroVideoSrc={heroVideo} />

      {/* Latest drop grid */}
      <ProductGrid title="Latest Drop" products={latestDrop} />

      {/* Brand story banner */}
      <VideoBanner />

      {/* More products grid */}
      <ProductGrid title="More From Asantials" products={moreFrom} />

      {/* Store list */}
      <StoreGrid />
    </>
  );
}
