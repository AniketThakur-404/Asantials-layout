// src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ item }) {
  const { img, title, price, badge } = item;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge ? (
          <span className="absolute left-5 top-5 rounded-full bg-neutral-900 px-4 py-1 text-[10px] tracking-[0.35em] text-white">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 py-5">
        <h3 className="text-[11px] uppercase tracking-[0.3em] text-neutral-900">
          {title}
        </h3>
        {price ? (
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  );
}
