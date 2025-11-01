// src/components/StoreCard.jsx
import React from 'react';

export default function StoreCard({ store }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
        <img
          src={store.img}
          alt={`${store.city} storefront`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 text-white sm:p-5">
          <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.34em] sm:text-[11px] sm:tracking-[0.4em]">
              {store.city?.toUpperCase()} Store
            </h3>
            <p className="mt-1 max-w-xs text-[10px] uppercase tracking-[0.22em] opacity-80 sm:text-[11px] sm:tracking-[0.25em]">
              {store.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
