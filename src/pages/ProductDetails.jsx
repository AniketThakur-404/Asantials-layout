// src/pages/ProductDetails.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
  toProductCard,
} from '../data/products';
import { useCart } from '../contexts/cart-context';
import { useNotifications } from '../components/NotificationProvider';

const Breadcrumbs = ({ title, className = '' }) => (
  <nav
    aria-label="Breadcrumb"
    className={`text-[11px] uppercase tracking-[0.35em] text-neutral-500 ${className}`}
  >
    <ol className="flex flex-wrap items-center gap-2">
      <li>
        <Link to="/" className="transition-colors hover:text-neutral-900">
          Home
        </Link>
      </li>
      <li>/</li>
      <li>
        <Link to="/apparel" className="transition-colors hover:text-neutral-900">
          All Products
        </Link>
      </li>
      <li>/</li>
      <li className="text-neutral-900">{title}</li>
    </ol>
  </nav>
);

const NotFound = () => (
  <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
    <h1 className="text-xl font-semibold uppercase tracking-[0.35em] text-neutral-900">
      Product Not Found
    </h1>
    <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
      The product you are looking for might be sold out or moved. Browse the latest arrivals and discover new pieces crafted in limited batches.
    </p>
    <Link
      to="/"
      className="rounded-full border border-neutral-900 px-6 py-3 text-[11px] uppercase tracking-[0.32em] transition hover:bg-neutral-900 hover:text-white"
    >
      Back to Shop
    </Link>
  </section>
);

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { openCartDrawer } = useOutletContext() ?? {};
  const { addItem } = useCart();
  const { notify } = useNotifications();
  const product = getProductBySlug(slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? null);
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] ?? null);
    setPincode('');
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const focusSize = location.state?.focusSize;
    if (focusSize && product.sizes?.includes(focusSize)) {
      setSelectedSize(focusSize);
    }
  }, [location.state, product]);

  const hasSizes = (product?.sizes?.length ?? 0) > 0;

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(product.slug).map((item) => toProductCard(item));
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    const size = selectedSize ?? product.sizes?.[0] ?? null;
    addItem(product.slug, { size: hasSizes ? size : null });
    notify({
      title: 'Added to Cart',
      message: `${product.title}${hasSizes && size ? ` · Size ${size}` : ''}`,
      actionLabel: 'View Cart',
      onAction: () => navigate('/cart'),
    });
    openCartDrawer?.();
  };

  const handleBuyNow = () => {
    const size = selectedSize ?? product.sizes?.[0] ?? null;
    addItem(product.slug, { size: hasSizes ? size : null });
    if (openCartDrawer) {
      openCartDrawer();
    } else {
      navigate('/cart');
    }
  };

  return (
    <article className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="gap-y-10 lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-32 lg:self-start">
            <Breadcrumbs title={product.title} className="mb-6" />
            <div>
              <h1 className="text-3xl font-semibold uppercase tracking-[0.25em] text-neutral-900">
                {product.headline ?? product.title}
              </h1>
              <p className="mt-3 text-lg tracking-[0.18em] text-neutral-600">
                {formatPrice(product.price)}
              </p>
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-neutral-600">
              <section>
                <h2 className="mb-2 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  Description
                </h2>
                <p>{product.description}</p>
              </section>
              <section>
                <h2 className="mb-2 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  Details
                </h2>
                <p>{product.details}</p>
              </section>
              <section className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-neutral-700">
                <span>{product.weight}</span>
                <span>{product.care}</span>
              </section>
              <section>
                <h2 className="mb-2 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  Shipping
                </h2>
                <p>{product.shipping}</p>
              </section>
            </div>
          </div>

          <div className="my-10 space-y-4 lg:col-span-5 lg:my-0">
            {product.images.map((src, index) => (
              <img
                key={src ?? index}
                src={src}
                alt={`${product.title} view ${index + 1}`}
                className="w-full rounded-lg bg-neutral-100 object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 lg:self-start">
            {hasSizes && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    Size
                  </h2>
                  <button
                    type="button"
                    className="text-[10px] uppercase tracking-[0.3em] text-neutral-900 underline-offset-4 transition hover:underline"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg border px-3 py-3 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                        selectedSize === size
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 text-neutral-700 hover:border-neutral-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </section>
            )}

            <div className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                id="giftCard"
                className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <label htmlFor="giftCard" className="text-neutral-600">
                Have a gift card?
              </label>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-full bg-neutral-900 py-4 text-[11px] uppercase tracking-[0.35em] text-white transition-transform duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 active:scale-95"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full rounded-full border border-neutral-900 py-4 text-[11px] uppercase tracking-[0.35em] text-neutral-900 transition-transform duration-200 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 active:scale-95"
              >
                Buy Now
              </button>
            </div>

            <section className="space-y-3">
              <h2 className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                Delivery Details
              </h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                  placeholder="Enter your pincode"
                  className="flex-1 rounded-full border border-neutral-200 px-5 py-3 text-sm tracking-[0.2em] text-neutral-700 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  className="rounded-full border border-neutral-900 px-6 py-3 text-[11px] uppercase tracking-[0.32em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                  onClick={() => {
                    if (!pincode.trim()) return;
                    window.alert(`Checking delivery availability for ${pincode.trim()}`);
                  }}
                >
                  Check
                </button>
              </div>
            </section>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <div className="border-t border-neutral-200 py-4">
              <h2 className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
                You May Also Like
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.href} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default ProductDetails;
