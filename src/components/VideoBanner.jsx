// src/components/VideoBanner.jsx
import React from 'react';
import bannerVideo from '../assets/banner-video.mp4';

export default function VideoBanner({ videoSrc = bannerVideo }) {
  return (
    <section className="relative my-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-neutral-200 py-10">
          <h2 className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Extension Of Your Expression
          </h2>
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-black">
        <video
          className="h-screen w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
