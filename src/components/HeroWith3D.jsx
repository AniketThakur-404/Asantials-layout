// src/components/HeroWith3D.jsx
import React from 'react';
import defaultHeroVideo from '../assets/Coin_in_Nature_Climate_Video.mp4';

const SPLINE_SCENE_URL = 'https://my.spline.design/aethirathgold-Yt10PlgylthzK19E5WCrB74M/';

export default function HeroWith3D({ heroVideoSrc }) {
  const videoSource = heroVideoSrc || defaultHeroVideo;

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-neutral-900 min-h-[480px] md:h-[88vh] md:min-h-[600px]">
      <video
        className="absolute inset-0 z-10 h-full w-full object-cover"
        src={videoSource}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative flex-1">
        <iframe
          title="ASANTIALS 3D Experience"
          src={SPLINE_SCENE_URL}
          frameBorder="0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          className="absolute inset-0 z-20 h-full w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-10 bg-white/95 backdrop-blur md:h-14"
      />

      <div className="pointer-events-none absolute inset-0 z-40 flex items-end justify-center px-4 pb-8 sm:pb-12 md:pb-16">
        <button className="pointer-events-auto mb-2 rounded-full border border-white/70 px-6 py-3 text-[10px] uppercase tracking-[0.35em] text-white/90 transition hover:bg-white hover:text-neutral-900 sm:px-8 sm:text-[11px]">
          Shop All
        </button>
      </div>
    </section>
  );
}
