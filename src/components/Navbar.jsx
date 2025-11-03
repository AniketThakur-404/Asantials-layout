// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`sticky top-0 z-40 border-t-2 border-black border-b border-neutral-200 ${
        scrolled ? 'bg-neutral-100' : 'bg-neutral-100'
      }`}
    >
      {/* relative wrapper so we can absolutely center the middle nav */}
      <div className="relative mx-auto h-14 w-full max-w-[1280px] px-6">
        {/* Left: Nav */}
        <nav className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:flex items-center gap-14">
          <NavLink
            to="/new-in"
            className={({ isActive }) =>
              `${navItem} ${isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-600 hover:text-neutral-900'}`
            }
          >
            NEW IN
          </NavLink>
          <NavLink
            to="/apparel"
            className={({ isActive }) =>
              `${navItem} ${isActive ? 'text-neutral-900 font-semibold' : 'text-neutral-600 hover:text-neutral-900'}`
            }
          >
            APPAREL
          </NavLink>
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
          <button className="hidden sm:block uppercase tracking-[0.25em] text-[11px] text-neutral-700 hover:text-neutral-900">
            SEARCH
          </button>
          <Link
            to="/login"
            className="hidden sm:block uppercase tracking-[0.25em] text-[11px] text-neutral-700 hover:text-neutral-900"
          >
            LOGIN
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="flex items-center gap-2 uppercase tracking-[0.25em] text-[11px] text-neutral-700 hover:text-neutral-900"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">CART</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
