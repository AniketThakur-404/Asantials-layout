// src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ item }) {
  const { img, title, price, badge } = item;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-neutral-900 px-4 py-1 text-[10px] tracking-[0.3em] text-white">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col justify-between px-1 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="flex-1 pr-4 text-[10px] uppercase leading-4 tracking-[0.25em] text-neutral-900">
            {title}
          </h3>
          {price ? (
            <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {price}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
