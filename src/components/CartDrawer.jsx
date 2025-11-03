// src/components/CartDrawer.jsx
import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { useCart } from '../contexts/cart-context';
import { formatPrice, getProductBySlug } from '../data/products';

const CartDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem } = useCart();

  const cartItems = useMemo(() => {
    return items
      .map((item) => {
        const product = getProductBySlug(item.slug);
        if (!product) return null;
        const lineTotal = product.price * (item.quantity ?? 1);
        return {
          id: item.id,
          product,
          quantity: item.quantity ?? 1,
          size: item.size,
          lineTotal,
        };
      })
      .filter(Boolean);
  }, [items]);

  const subtotal = cartItems.reduce((acc, entry) => acc + entry.lineTotal, 0);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  const handleViewBag = () => {
    onClose();
    navigate('/cart');
  };

  const handleCheckout = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 z-[998] flex">
      <div className="h-full w-full bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <aside className="relative ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="text-xs uppercase tracking-[0.35em] text-neutral-600">Your Cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-transparent p-2 transition hover:border-neutral-200"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Your cart is currently empty.
            </p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-xl bg-neutral-100">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between text-xs uppercase tracking-[0.25em]">
                    <div>
                      <p className="text-neutral-900">{item.product.title}</p>
                      <p className="mt-1 text-neutral-500">{formatPrice(item.product.price)}</p>
                      {item.size && (
                        <p className="mt-1 text-neutral-500">Size {item.size}</p>
                      )}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-neutral-600">
                      <div className="flex items-center rounded-full border border-neutral-200">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-3 py-1 transition hover:text-neutral-900"
                          onClick={() =>
                            updateQuantity(item.product.slug, item.size ?? null, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 py-1 text-neutral-900">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-3 py-1 transition hover:text-neutral-900"
                          onClick={() =>
                            updateQuantity(item.product.slug, item.size ?? null, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove item"
                        className="rounded-full border border-transparent p-2 transition hover:border-neutral-200"
                        onClick={() => removeItem(item.product.slug, item.size ?? null)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 text-neutral-900">{formatPrice(item.lineTotal)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className="border-t border-neutral-200 px-6 py-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-600">
            <span>Subtotal</span>
            <span className="text-neutral-900">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            Taxes and shipping calculated at checkout.
          </p>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full rounded-full bg-neutral-900 py-3 text-[11px] uppercase tracking-[0.35em] text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={handleViewBag}
              className="w-full rounded-full border border-neutral-900 py-3 text-[11px] uppercase tracking-[0.35em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
            >
              View Full Cart
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default CartDrawer;
