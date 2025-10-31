// src/components/StoreGrid.jsx
import React from 'react';
import { storeLocations } from '../data/appData';
import StoreCard from './StoreCard';

export default function StoreGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="border-t border-neutral-200 py-10">
        <h2 className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Asantials Stores
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {storeLocations.map((store) => (
          <StoreCard key={store.city} store={store} />
        ))}
      </div>
    </section>
  );
}
