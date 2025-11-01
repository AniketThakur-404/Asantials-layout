import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const SectionHeader = ({ title }) => (
  <div className="flex flex-col gap-4 border-t border-neutral-200 py-4 uppercase md:flex-row md:items-center md:justify-between">
    <h2 className="text-xs tracking-[0.35em] text-neutral-600">{title}</h2>
    <button className="flex items-center gap-2 self-start rounded-full border border-neutral-900 px-5 py-2 text-[10px] tracking-[0.32em] transition hover:bg-neutral-900 hover:text-white sm:self-end md:self-auto">
      Discover More
      <ChevronRight className="h-3 w-3" />
    </button>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProductGrid({ title, products }) {
  return (
    // Keep desktop width capped so the four-up layout keeps similar card widths
    <section className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-2 py-9">
      <SectionHeader title={title} />

      {/* Four-up on large screens with consistent spacing */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-2">
        {products.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-full"
          >
            <ProductCard item={item} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center py-5">
        <button className="rounded-full border border-neutral-900 px-8 py-3 text-[11px] uppercase tracking-[0.3em] transition hover:bg-neutral-900 hover:text-white">
          Discover More
        </button>
      </div>
    </section>
  );
}
