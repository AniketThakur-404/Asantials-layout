// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const shippingMessages = [
  'Shipping Worldwide',
  'Asantials Express Dispatch',
  'Track Your Order 24/7',
  'Complimentary Pick-Ups For Returns',
  'Exclusive Online Drops',
];

const ShippingStripe = () => (
  <div className="w-full bg-neutral-900 text-white">
    <div className="shipping-marquee">
      <div className="shipping-marquee__track">
        {shippingMessages.map((message) => (
          <span key={message} className="shipping-marquee__item">
            {message}
          </span>
        ))}
        {shippingMessages.map((message) => (
          <span
            key={`${message}-duplicate`}
            className="shipping-marquee__item"
            aria-hidden="true"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SiteFooter = () => (
  <footer className="border-t border-neutral-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
        <div className="flex items-center">
          <span className="font-serif italic text-4xl uppercase tracking-[0.35em] text-neutral-900">
            Asantials
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-neutral-700">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Help
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="hover:underline">
                  Members Login
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:underline">
                  Place an Exchange/Return Request
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:underline">
                  Exchange/Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:underline">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/story" className="hover:underline">
                  Story
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:underline">
                  Our Stores
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/collaborations" className="hover:underline">
                  Collaborations
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm">
          <div className="mb-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            Connect
          </div>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              YouTube
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            (c) 2025 Asantials Retail Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-neutral-900 py-2 text-center text-[10px] uppercase tracking-[0.4em] text-white">
      Connect
    </div>
    <div className="mx-auto max-w-7xl px-4 py-6 text-[11px] text-neutral-500">
      <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-neutral-600">
        Popular Searches
      </div>
      <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        Oversized T-Shirts, Hoodies, Acid Wash T-Shirts, Designer Tees, Casual Jackets, Black Hoodies, Printed Sweatshirts
      </p>
    </div>
  </footer>
);

const Footer = () => (
  <>
    <ShippingStripe />
    <SiteFooter />
  </>
);

export default Footer;
