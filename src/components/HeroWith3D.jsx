// src/components/HeroWith3D.jsx
import React, { useEffect, useRef } from 'react';
import defaultHeroVideo from '../assets/Coin_in_Nature_Climate_Video.mp4';

const SPLINE_SCENE_URL = 'https://my.spline.design/aethirathgold-Yt10PlgylthzK19E5WCrB74M/';

export default function HeroWith3D({ heroVideoSrc }) {
  const heroRef = useRef(null);
  const videoSource = heroVideoSrc || defaultHeroVideo;

  useEffect(() => {
    let rafId = null;

    const updateParallax = () => {
      if (!heroRef.current) return;
      const scrollTop = window.scrollY || 0;
      const clampedOffset = Math.min(Math.max(scrollTop * 0.2, 0), 180);
      heroRef.current.style.setProperty('--parallax-offset', `${clampedOffset}px`);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-parallax relative h-[90vh] w-full overflow-hidden bg-neutral-900"
    >
      <video
        className="hero-parallax__layer absolute inset-0 z-10 h-full w-full object-cover"
        src={videoSource}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-parallax__layer absolute inset-0 z-20 h-full w-full">
        <iframe
          title="ASANTIALS 3D Experience"
          src={SPLINE_SCENE_URL}
          frameBorder="0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          className="h-full w-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 right-4 h-10 w-36 rounded-full bg-neutral-900/80 shadow-[0_0_20px_rgba(0,0,0,0.45)]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/25 via-transparent to-black/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 bg-neutral-900/75" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-30 h-20 w-48 bg-gradient-to-l from-neutral-900 via-neutral-900/80 to-transparent"
        aria-hidden="true"
      />

      <div className="hero-parallax__content pointer-events-none absolute inset-0 z-40 flex items-end justify-center pb-16">
        <button className="pointer-events-auto rounded-full border border-white/70 px-8 py-3 text-[11px] uppercase tracking-[0.35em] text-white/90 transition hover:bg-white hover:text-neutral-900">
          Shop All
        </button>
      </div>
    </section>
  );
}
