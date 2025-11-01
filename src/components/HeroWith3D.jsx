// src/components/HeroWith3D.jsx
import React from 'react';
import defaultHeroVideo from '../assets/Coin_in_Nature_Climate_Video.mp4';

const SPLINE_SCENE_URL = 'https://my.spline.design/aethirathgold-Yt10PlgylthzK19E5WCrB74M/';

export default function HeroWith3D({ heroVideoSrc }) {
  const videoSource = heroVideoSrc || defaultHeroVideo;

  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-neutral-900">
      <video
        className="absolute inset-0 z-10 h-full w-full object-cover"
        src={videoSource}
        autoPlay
        muted
        loop
        playsInline
      />

      <iframe
        title="ASANTIALS 3D Experience"
        src={SPLINE_SCENE_URL}
        frameBorder="0"
        width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        className="absolute inset-0 z-20 h-full w-full"
      />

      {/* Optional top fade (fixed class typo) */}
      <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t via-transparent to-black/30" />

      {/* FULL-WIDTH WHITE STRIP to hide the badge row */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-30 h-12 md:h-16 bg-white pointer-events-auto"
      />

      {/* CTA sits above the white strip */}
      <div className="absolute inset-0 z-40 flex items-end justify-center pb-8 md:pb-14">
        <button className="pointer-events-auto rounded-full border border-white/70 px-8 py-3 text-[11px] uppercase tracking-[0.35em] mb-4 text-white/90 transition hover:bg-white hover:text-neutral-900">
          Shop All
        </button>
      </div>
    </section>
  );
}
