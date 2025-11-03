// src/pages/ProductDetails.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const imageUrl = (file) => `${import.meta.env?.BASE_URL ?? '/'}images/${file}`;

const productData = {
  name: 'GREY CHECKMATE T-SHIRT',
  price: 'Rs. 4,700',
  description:
    'THE GREY CHECKMATE T-SHIRT CAPTURES THE SPIRIT OF STRATEGY AND STYLE IN ONE BOLD DESIGN. CRAFTED FROM 100% PREMIUM COTTON WITH A HEAVYWEIGHT 260 GSM FABRIC, IT DELIVERS LASTING COMFORT AND STRUCTURE. THE STRIKING PUFF PRINTED CHESS T-SHIRT DESIGN ON THE FRONT SHOWCASES A MODERN TWIST ON CLASSIC GAME ELEMENTS, MAKING IT A MUST-HAVE FOR EVERY CHESS T-SHIRT ENTHUSIAST.',
  details: '100% COTTON',
  weight: '260 GSM',
  care: 'REVERSE WASH ONLY',
  shipping: 'PACKED WITHIN 24 HOURS. FREE DELIVERY PAN-INDIA. DISPATCHES NEXT DAY.',
  images: [imageUrl('m1.jpg'), imageUrl('m2.jpg'), imageUrl('m3.jpg')],
  availableSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
};

const relatedProducts = [
  { title: 'Molten Rogue Tee', price: 'Rs. 3,500', img: imageUrl('m4.jpg'), href: '#' },
  { title: 'Olive Sentinel Hoodie', price: 'Rs. 3,700', img: imageUrl('p1.jpg'), href: '#' },
  { title: 'Charcoal Hawk Hoodie', price: 'Rs. 3,900', img: imageUrl('p2.png'), href: '#' },
  { title: 'Prism Long Sleeve', price: 'Rs. 3,600', img: imageUrl('mk1.jpg'), href: '#' },
];

const Header = () => (
  <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-3xl font-extrabold uppercase tracking-[0.55em] text-black"
        >
          ASANTIALS
        </Link>
        <nav className="hidden lg:flex space-x-10 text-xs font-semibold uppercase tracking-wider text-gray-700">
          <Link to="/new-in" className="hover:text-gray-900">
            New In
          </Link>
          <Link to="/apparel" className="hover:text-gray-900">
            Apparel
          </Link>
          <Link to="/stores" className="hover:text-gray-900">
            Stores
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-gray-700">
        <button type="button" className="hover:text-gray-900">
          Search
        </button>
        <Link to="/login" className="hover:text-gray-900">
          Login
        </Link>
        <Link to="/cart" className="flex items-center hover:text-gray-900">
          Cart
          <span className="ml-2 text-white bg-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
            1
          </span>
        </Link>
      </div>
    </div>
  </header>
);

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('L');
  const [pincode, setPincode] = useState('');

  const galleryImages = productData.images;

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 lg:self-start lg:min-h-[calc(100vh-6rem)]">
            <div className="text-xs text-gray-500">
              <Link to="/" className="hover:text-black">
                Home
              </Link>{' '}
              /{' '}
              <Link to="/apparel" className="hover:text-black">
                All Products
              </Link>{' '}
              / {productData.name}
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{productData.name}</h1>
              <p className="text-xl font-medium">{productData.price}</p>
            </div>
            <div className="space-y-5 text-sm">
              <div>
                <h3 className="font-semibold uppercase mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{productData.description}</p>
              </div>
              <div>
                <h3 className="font-semibold uppercase mb-2">Details</h3>
                <p className="text-gray-600">{productData.details}</p>
              </div>
              <div>
                <h3 className="font-semibold uppercase mb-2">Weight</h3>
                <p className="text-gray-600">{productData.weight}</p>
              </div>
              <div>
                <h3 className="font-semibold uppercase mb-2">Puff Print</h3>
                <p className="text-gray-600">{productData.care}</p>
              </div>
              <div>
                <h3 className="font-semibold uppercase mb-2">Shipping</h3>
                <p className="text-gray-600">{productData.shipping}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 my-10 lg:my-0">
            <div className="flex flex-col gap-y-4">
              {galleryImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`${productData.name} image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="flex min-h-full flex-col space-y-6 lg:min-h-[calc(100vh-6rem)]">
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold uppercase">Size</h3>
                  <button className="text-xs text-black font-semibold uppercase tracking-wider hover:underline">
                    Size Chart
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {productData.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 border rounded-lg text-xs font-semibold transition-colors ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </section>

              <div className="flex items-center text-sm pt-2">
                <input
                  type="checkbox"
                  id="giftCard"
                  className="mr-3 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor="giftCard" className="font-medium text-gray-700">
                  Have a gift card?
                </label>
              </div>

              <div className="space-y-4">
                <button
                  className="w-full py-4 text-white bg-black rounded-lg font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
                  onClick={() => window.alert(`Added ${productData.name} (${selectedSize}) to cart!`)}
                >
                  Add to cart
                </button>
                <button
                  className="w-full py-4 text-black bg-white border border-black rounded-lg font-semibold text-sm tracking-wider uppercase hover:bg-gray-50 transition-colors"
                  onClick={() => window.alert(`Buying ${productData.name} (${selectedSize}) now!`)}
                >
                  Buy now
                </button>
              </div>

              <section className="pt-4 space-y-4">
                <h3 className="font-semibold text-sm uppercase">Delivery Details</h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Enter your pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-grow p-3 border border-gray-300 rounded-lg text-sm focus:ring-black focus:border-black placeholder-gray-500"
                  />
                  <button
                    className="px-6 py-3 text-white bg-black rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors"
                    onClick={() => window.alert(`Checking delivery for Pincode: ${pincode}`)}
                  >
                    Check
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:auto-cols-[minmax(220px,1fr)] md:grid-flow-col md:grid-cols-none">
            {relatedProducts.map((item) => (
              <Link to={item.href} key={item.title} className="space-y-2 group">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">{item.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
