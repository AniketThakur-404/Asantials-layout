// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, ShoppingCart, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navItems = [
    { label: 'NEW IN', to: '/new-in' },
    { label: 'APPAREL', to: '/apparel' },
    { label: 'STORES', to: '/stores' },
  ];

  const navItemClass =
    'uppercase tracking-[0.25em] text-[11px] transition-colors duration-200';

  return (
    <header
      className={`sticky top-0 z-40 border-b border-neutral-200 border-t-2 border-black ${
        scrolled ? 'bg-neutral-50/95 backdrop-blur' : 'bg-neutral-100'
      }`}
    >
      <div className="mx-auto flex h-[60px] w-full max-w-[1280px] items-center gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="font-extrabold uppercase tracking-[0.55em] text-[13px] leading-none text-neutral-900"
        >
          ASANTIALS
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${navItemClass} ${
                  isActive
                    ? 'text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-6 sm:gap-10">
          <button className="hidden sm:block uppercase tracking-[0.25em] text-[11px] text-neutral-700 transition hover:text-neutral-900">
            SEARCH
          </button>
          <Link
            to="/login"
            className="hidden sm:block uppercase tracking-[0.25em] text-[11px] text-neutral-700 transition hover:text-neutral-900"
          >
            LOGIN
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="flex items-center gap-2 uppercase tracking-[0.25em] text-[11px] text-neutral-700 transition hover:text-neutral-900"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">CART</span>
          </Link>
          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-neutral-400 p-1 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-neutral-700" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5 text-neutral-700" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          mobileOpen ? 'max-h-60 border-t border-neutral-200' : 'max-h-0'
        } overflow-hidden transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="flex flex-col gap-2 px-4 pb-4 pt-3">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `${navItemClass} ${
                  isActive
                    ? 'text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="text-left uppercase tracking-[0.25em] text-[11px] text-neutral-600 transition hover:text-neutral-900"
          >
            SEARCH
          </button>
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="uppercase tracking-[0.25em] text-[11px] text-neutral-600 transition hover:text-neutral-900"
          >
            LOGIN
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
