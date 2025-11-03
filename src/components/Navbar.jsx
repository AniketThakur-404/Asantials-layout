// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/cart-context';

const Navbar = ({ onSearchClick = () => {}, onCartClick = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeCategory = searchParams.get('category');
  const isProductsPath = location.pathname === '/products';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem =
    'px-2 uppercase tracking-[0.25em] text-[11px] transition-colors duration-200';

  return (
    <header
      className={`border-t-2 border-black border-b border-neutral-200 ${
        scrolled ? 'bg-neutral-100' : 'bg-neutral-100'
      }`}
    >
      {/* relative wrapper so we can absolutely center the middle nav */}
      <div className="relative mx-auto h-14 w-full max-w-[1280px] px-6">
        {/* Left: Nav */}
        <nav className="absolute left-6 top-1/2 hidden -translate-y-1/2 items-center gap-14 md:flex">
          <NavLink
            to="/products"
            className={() =>
              `${navItem} ${
                isProductsPath && !activeCategory
                  ? 'text-neutral-900 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`
            }
            end
          >
            ALL PRODUCTS
          </NavLink>
          <Link
            to="/products?category=t-shirts"
            className={`${navItem} ${
              isProductsPath && activeCategory === 't-shirts'
                ? 'text-neutral-900 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            T-SHIRTS
          </Link>
          <Link
            to="/products?category=hoodies"
            className={`${navItem} ${
              isProductsPath && activeCategory === 'hoodies'
                ? 'text-neutral-900 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            HOODIES
          </Link>
        </nav>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            to="/"
            className="font-extrabold tracking-[0.55em] text-[13px] leading-none text-neutral-900"
          >
            ASANTIALS
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-10">
          <button
            type="button"
            onClick={onSearchClick}
            className="hidden sm:block uppercase tracking-[0.25em] text-[11px] text-neutral-700 hover:text-neutral-900"
          >
            SEARCH
          </button>
          <Link
            to="/login"
            className="hidden sm:block uppercase tracking-[0.25em] text-[11px] text-neutral-700 hover:text-neutral-900"
          >
            LOGIN
          </Link>
          <button
            type="button"
            onClick={onCartClick}
            aria-label="Cart"
            className="relative flex items-center gap-2 uppercase tracking-[0.25em] text-[11px] text-neutral-700 transition hover:text-neutral-900"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
            <span className="hidden sm:inline">CART</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
