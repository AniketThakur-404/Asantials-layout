// src/components/StoreGrid.jsx
import React from 'react';
import { storeLocations } from '../data/appData';
import StoreCard from './StoreCard';

export default function StoreGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 md:px-8 lg:px-10">
      <div className="border-t border-neutral-200 py-4">
        <h2 className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
          Asantials Stores
        </h2>
      </div>

      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10">
        <div
          className="
            no-scrollbar
            ml-14 flex gap-4 sm:gap-5 md:gap-6 lg:gap-8
            overflow-x-auto px-4 pb-4 sm:px-6 md:px-8 lg:px-10
            snap-x snap-mandatory
          "
        >
          {storeLocations.map((store) => (
            <div
              key={store.city}
              className="w-[min(420px,80vw)] md:w-[min(420px,40vw)] lg:w-[360px] shrink-0 snap-start"
            >
              <StoreCard store={store} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
