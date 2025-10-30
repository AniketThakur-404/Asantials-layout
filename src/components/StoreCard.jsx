// src/components/StoreCard.jsx
import React from 'react';

export default function StoreCard({ store }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden bg-neutral-100">
      <img
        src={store.img}
        alt={store.city}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-[0.4em]">
            {store.city} Store
          </h3>
          <p className="max-w-xs text-[11px] uppercase tracking-[0.25em] text-white/80">
            {store.address}
          </p>
        </div>
      </div>
    </div>
  );
}
