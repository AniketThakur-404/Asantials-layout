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
      {/* Hero section with 3D model */}
      <HeroWith3D heroVideoSrc={heroVideo} />

      {/* First product grid with parallax */}
      <ProductGrid title="Latest Drop" products={latestDrop} />

      {/* Second video section */}
      <VideoBanner />

      {/* Second product grid with parallax */}
      <ProductGrid title="More From Asantials" products={moreFrom} />

      {/* Store grid with hover effect */}
      <StoreGrid />
    </>
  );
}
