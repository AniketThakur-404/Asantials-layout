// src/components/SearchOverlay.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSuggestions, products, searchProducts, toProductCard } from '../data/products';

const popularProducts = products.slice(0, 6).map(toProductCard);

const SearchOverlay = ({ open, onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) {
      setQuery('');
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = previousOverflow;
      };
    }

    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const suggestionItems = useMemo(() => getSuggestions(query), [query]);

  const productResults = useMemo(() => {
    if (!query) {
      return popularProducts;
    }
    return searchProducts(query, 6).map(toProductCard);
  }, [query]);

  const performSearch = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onClose();
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    performSearch(query);
  };

  const handleSuggestion = (value) => {
    if (!value) return;
    performSearch(value);
  };

  const handleProductClick = (href) => {
    onClose();
    navigate(href);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex flex-col bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <h2 className="text-xs uppercase tracking-[0.35em] text-neutral-500">Search</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 transition hover:text-neutral-900"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products..."
            className="w-full border-b border-neutral-900 bg-transparent pb-3 text-base uppercase tracking-[0.3em] text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
        </form>

        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Suggestions</p>
            <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.25em] text-neutral-700">
              {suggestionItems.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="w-full text-left transition hover:text-neutral-900"
                    onClick={() => handleSuggestion(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Products</p>
            <div className="mt-4 space-y-3">
              {productResults.length === 0 ? (
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  No results for “{query}”
                </p>
              ) : (
                productResults.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleProductClick(item.href)}
                    className="flex w-full items-center gap-4 rounded-xl border border-transparent p-2 text-left transition hover:border-neutral-200 hover:bg-white"
                  >
                    <div className="h-14 w-14 overflow-hidden rounded-lg bg-neutral-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.3em] text-neutral-900">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                        {item.price}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-4">
          <button
            type="button"
            onClick={() => performSearch(query)}
            disabled={!query.trim()}
            className="flex w-full items-center justify-between rounded-full border border-neutral-200 px-4 py-3 text-[11px] uppercase tracking-[0.32em] text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>Search for “{query || '...'}”</span>
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
