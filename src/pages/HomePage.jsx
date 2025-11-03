// src/pages/HomePage.jsx
import React from 'react';
import HeroWith3D from '../components/HeroWith3D';
import ProductGrid from '../components/ProductGrid';
import VideoBanner from '../components/VideoBanner';
import { latestDrop, moreFrom } from '../data/appData';
import heroVideo from '../assets/Coin_in_Nature_Climate_Video.mp4';

export default function HomePage() {
  return (
    <>
      <HeroWith3D heroVideoSrc={heroVideo} />

      <ProductGrid title="Latest Drop" products={latestDrop} />

      <VideoBanner />

      <ProductGrid title="More From Asantials" products={moreFrom} />
    </>
  );
}
