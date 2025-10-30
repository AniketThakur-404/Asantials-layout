// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [isPopping, setIsPopping] = useState(false);
  const popTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (popTimeoutRef.current) {
        clearTimeout(popTimeoutRef.current);
      }
    };
  }, []);

  const handleCartClick = () => {
    setItemCount((prev) => prev + 1);
    setIsPopping(true);
    if (popTimeoutRef.current) {
      clearTimeout(popTimeoutRef.current);
    }
    popTimeoutRef.current = setTimeout(() => setIsPopping(false), 350);
  };

  return (
    <div
      className={`sticky top-0 z-40 border-b border-neutral-200 transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-black tracking-[0.6em] text-sm text-neutral-900"
        >
          ASANTIALS
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
          <Link to="/new-in" className="hover:text-neutral-600">
            New In
          </Link>
          <span className="cursor-pointer hover:text-neutral-600">Apparel</span>
          <span className="cursor-pointer hover:text-neutral-600">Stores</span>
        </nav>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-900">
          <button className="hidden sm:block hover:text-neutral-600">
            Search
          </button>
          <Link to="/login" className="hidden sm:block hover:text-neutral-600">
            Login
          </Link>
          <button
            type="button"
            onClick={handleCartClick}
            className="relative flex items-center justify-center rounded-full border border-neutral-900 p-2 transition hover:bg-neutral-900 hover:text-white"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="h-4 w-4" />
            <span
              className={`absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-neutral-900 text-[9px] font-semibold text-white transition-transform ${
                itemCount > 0 ? "scale-100" : "scale-0"
              } ${isPopping ? "animate-pop" : ""}`}
            >
              {itemCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
