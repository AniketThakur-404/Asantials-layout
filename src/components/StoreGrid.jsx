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

      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:gap-5 sm:px-6 md:gap-6 md:px-8 lg:gap-8 lg:px-10 xl:gap-10 xl:px-12">
          {storeLocations.map((store) => (
            <div
              key={store.city}
              className="shrink-0 snap-start w-[min(360px,82vw)] sm:w-[min(380px,68vw)] md:w-[min(360px,48vw)] lg:w-[340px]"
            >
              <StoreCard store={store} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
