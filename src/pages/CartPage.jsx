// src/pages/CartPage.jsx
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { formatPrice, getProductBySlug, products, toProductCard } from '../data/products';
import { useCart } from '../contexts/cart-context';

const CartPage = () => {
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

  const subtotal = cartItems.reduce((acc, item) => acc + item.lineTotal, 0);
  const delivery = cartItems.length > 0 ? 0 : 0;
  const total = subtotal + delivery;

  const recommendedProducts = useMemo(() => {
    const inCartSlugs = new Set(cartItems.map((item) => item.product.slug));
    return products
      .filter((product) => !inCartSlugs.has(product.slug))
      .slice(0, 4)
      .map((product) => toProductCard(product));
  }, [cartItems]);

  const isEmpty = cartItems.length === 0;

  const handleCheckout = () => {
    window.alert('Checkout flow coming soon. Your cart items are saved for this session.');
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-neutral-200 pb-4">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-neutral-900">
          Shopping Cart
        </h1>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-neutral-200 px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
            Your cart is currently empty
          </p>
          <Link
            to="/"
            className="rounded-full border border-neutral-900 px-6 py-3 text-[11px] uppercase tracking-[0.32em] transition hover:bg-neutral-900 hover:text-white"
          >
            Explore Latest Drop
          </Link>
        </div>
      ) : (
        <div className="gap-12 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 rounded-2xl border border-neutral-200 p-4 sm:gap-6"
              >
                <Link
                  to={`/product/${item.product.slug}`}
                  className="relative block overflow-hidden rounded-xl bg-neutral-100"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </Link>

                <div className="flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-900 transition hover:underline"
                      >
                        {item.product.title}
                      </Link>
                      {item.size && (
                        <span className="rounded-full border border-neutral-200 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neutral-600">
                          Size {item.size}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
                      <div className="flex items-center rounded-full border border-neutral-200">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-3 py-1 text-neutral-500 transition hover:text-neutral-900"
                          onClick={() =>
                            updateQuantity(
                              item.product.slug,
                              item.size ?? null,
                              item.quantity - 1,
                            )
                          }
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-neutral-900">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-3 py-1 text-neutral-500 transition hover:text-neutral-900"
                          onClick={() =>
                            updateQuantity(
                              item.product.slug,
                              item.size ?? null,
                              item.quantity + 1,
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline"
                        onClick={() => removeItem(item.product.slug, item.size ?? null)}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm font-medium tracking-[0.2em] text-neutral-900">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em]">
                    <button
                      type="button"
                      className="text-neutral-500 underline-offset-4 transition hover:text-neutral-900 hover:underline"
                      onClick={() =>
                        navigate(`/product/${item.product.slug}`, {
                          state: { focusSize: item.size },
                        })
                      }
                    >
                      Edit Selection
                    </button>
                    <span className="font-semibold text-neutral-900">
                      {formatPrice(item.lineTotal)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="mt-10 space-y-6 rounded-3xl border border-neutral-200 p-6 lg:mt-0">
            <h2 className="text-sm uppercase tracking-[0.32em] text-neutral-600">
              Order Summary
            </h2>

            <dl className="space-y-3 text-sm tracking-[0.2em] text-neutral-600">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-neutral-900">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-neutral-900">
                  {delivery === 0 ? 'Complimentary' : formatPrice(delivery)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold text-neutral-900">Total</dt>
                <dd className="font-semibold text-neutral-900">{formatPrice(total)}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={handleCheckout}
              className="w-full rounded-full bg-neutral-900 py-4 text-[11px] uppercase tracking-[0.35em] text-white transition hover:bg-neutral-800"
            >
              Proceed to Checkout
            </button>

            <p className="text-xs leading-relaxed tracking-[0.25em] text-neutral-500">
              Duties and taxes are calculated at checkout. Free exchanges within India within 30 days
              of dispatch.
            </p>
          </aside>
        </div>
      )}

      {recommendedProducts.length > 0 && (
        <section className="mt-24">
          <div className="border-t border-neutral-200 py-4">
            <h2 className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
              Recommended for You
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((item) => (
              <ProductCard key={item.href} item={item} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default CartPage;
