// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 border-b border-neutral-200 transition-colors duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur' : 'bg-white'
      }`}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-black tracking-[0.6em] text-sm text-neutral-900"
        >
          ASANTIALS
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-10 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
          <Link to="/new-in" className="hover:text-neutral-600">
            New In
          </Link>
          <span className="cursor-pointer hover:text-neutral-600">Apparel</span>
          <span className="cursor-pointer hover:text-neutral-600">Custom</span>
          <span className="cursor-pointer hover:text-neutral-600">Stores</span>
        </nav>

        <div className="flex items-center justify-end gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
          <button className="hidden sm:block hover:text-neutral-600">
            Search
          </button>
          <Link to="/login" className="hidden sm:block hover:text-neutral-600">
            Login
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-neutral-600"
            aria-label="Cart"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
