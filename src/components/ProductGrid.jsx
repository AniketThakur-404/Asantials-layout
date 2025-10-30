// src/components/ProductGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const SectionHeader = ({ title }) => (
  <div className="flex flex-col gap-4 border-t border-neutral-200 py-10 uppercase md:flex-row md:items-center md:justify-between">
    <h2 className="text-xs tracking-[0.35em] text-neutral-600">{title}</h2>
    <button className="flex items-center gap-2 self-start rounded-full border border-neutral-900 px-4 py-2 text-[10px] tracking-[0.35em] transition hover:bg-neutral-900 hover:text-white md:self-auto">
      Discover More
      <ChevronRight className="h-3 w-3" />
    </button>
  </div>
);

// Define the animation for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function ProductGrid({ title, products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader title={title} />
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {products.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Triggers animation when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            className="h-full"
          >
            <ProductCard item={item} />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center py-12">
        <button className="rounded-full border border-neutral-900 px-8 py-3 text-[11px] uppercase tracking-[0.3em] transition hover:bg-neutral-900 hover:text-white">
          Discover More
        </button>
      </div>
    </section>
  );
}

