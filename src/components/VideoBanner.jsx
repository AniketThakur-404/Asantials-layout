// src/components/VideoBanner.jsx
import React from 'react';
import bannerVideo from '../assets/banner-video.mp4';

export default function VideoBanner({ videoSrc = bannerVideo }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-t border-neutral-200 py-10 uppercase md:flex-row md:items-center md:justify-between">
          <h2 className="text-xs tracking-[0.35em] text-neutral-600">
            Extension Of Your Expression
          </h2>
          <button className="flex items-center gap-2 self-start rounded-full border border-neutral-900 px-4 py-2 text-[10px] tracking-[0.35em] transition hover:bg-neutral-900 hover:text-white md:self-auto">
            Discover More
          </button>
        </div>
      </div>
      <div className="relative mx-auto mt-8 h-[70vh] w-full max-w-7xl overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
          <span className="border border-white/60 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/80">
            Discover More
          </span>
          <span className="text-4xl font-black tracking-[0.6em] md:text-5xl lg:text-6xl">
            ASANTIALS
          </span>
        </div>
      </div>
    </section>
  );
}
