import React from "react";

export default function ProductCard({ item }) {
  const { img, title, price, badge } = item;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[5/6] overflow-hidden bg-neutral-100">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-neutral-900 px-3 py-1 text-[10px] tracking-[0.25em] text-white uppercase">
            {badge}
          </span>
        )}
      </div>

      <div className="px-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="flex-1 text-[10px] uppercase leading-4 tracking-[0.28em] text-neutral-900">
            {title}
          </h3>
          {price && (
            <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {price}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
