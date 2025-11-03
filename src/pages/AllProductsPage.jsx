// src/pages/AllProductsPage.jsx
import React, { useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products, toProductCard } from '../data/products';

const navItems = [{ value: 'all', label: 'View All' }, ...categories];

const useActiveCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get('category') ?? 'all';

  const updateCategory = (value) => {
    if (value === 'all') {
      setSearchParams({});
      return;
    }
    setSearchParams({ category: value });
  };

  return { active, updateCategory };
};

const AllProductsPage = () => {
  const { active, updateCategory } = useActiveCategory();
  const location = useLocation();

  const filteredProducts = useMemo(() => {
    if (active === 'all') return products;
    return products.filter((product) => product.category === active);
  }, [active]);

  const totalCount = filteredProducts.length;

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
      <header className="space-y-8 border-b border-neutral-200 pb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-xs uppercase tracking-[0.35em] text-neutral-600">All Products</h1>
          <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            {totalCount} styles
          </div>
        </div>

        <nav className="flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.3em] text-neutral-500">
          {navItems.map((item) => {
            const isActive = (item.value === 'all' && active === 'all') || active === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => updateCategory(item.value)}
                className={`pb-1 transition ${
                  isActive
                    ? 'border-b border-neutral-900 text-neutral-900'
                    : 'hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.32em] text-neutral-500">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              Filter
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              Availability
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span>Sort by:</span>
            <button
              type="button"
              className="rounded-full border border-neutral-200 px-4 py-2 transition hover:border-neutral-900 hover:text-neutral-900"
            >
              Featured
            </button>
          </div>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} item={toProductCard(product)} />
        ))}
      </div>

      <footer className="mt-16 rounded-3xl border border-neutral-200 p-6 text-center text-xs uppercase tracking-[0.3em] text-neutral-500">
        Looking for something specific?{' '}
        <Link
          to={`/search${location.search}`}
          className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
        >
          Use the search experience
        </Link>
      </footer>
    </section>
  );
};

export default AllProductsPage;
