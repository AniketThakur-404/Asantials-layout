// src/data/products.js
const image = (file) => `${import.meta.env?.BASE_URL ?? '/'}images/${file}`;

const baseSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const defaultDescription =
  'Cut from a heavyweight 260 GSM cotton jersey, each piece is finished with enzyme washing for a soft hand feel and a structured drape. Graphic applications use a high-build puff print that keeps its edge wash after wash.';
const defaultShipping =
  'Dispatched within 24 hours. Complimentary shipping pan-India. International duties calculated at checkout.';

const createProduct = (product) => ({
  description: defaultDescription,
  details: '100% Cotton Jersey',
  weight: '260 GSM',
  care: 'Reverse wash inside-out. Do not tumble dry.',
  shipping: defaultShipping,
  sizes: baseSizes,
  badge: null,
  related: [],
  color: 'black',
  availability: 'in-stock',
  fit: 'standard',
  ...product,
});

export const products = [
  createProduct({
    slug: 'grey-serpentine-tee',
    title: 'Grey Serpentine Tee',
    headline: 'GREY SERPENTINE TEE',
    price: 14700,
    badge: 'New',
    images: [image('m1.jpg'), image('m2.jpg'), image('m3.jpg')],
    related: ['white-commitment-tee', 'black-personal-tee', 'molten-rogue-tee', 'charcoal-hawk-hoodie'],
    category: 't-shirts',
    color: 'grey',
    fit: 'oversized',
  }),
  createProduct({
    slug: 'white-commitment-tee',
    title: 'White Commitment Tee',
    headline: 'WHITE COMMITMENT TEE',
    price: 14200,
    images: [image('m2.jpg'), image('m3.jpg'), image('m4.jpg')],
    related: ['grey-serpentine-tee', 'red-assumption-tee', 'onyx-nomad-set', 'prism-long-sleeve'],
    category: 't-shirts',
    color: 'white',
    availability: 'in-stock',
    fit: 'regular',
  }),
  createProduct({
    slug: 'red-assumption-tee',
    title: 'Red Assumption Tee',
    headline: 'RED ASSUMPTION TEE',
    price: 14200,
    images: [image('m3.jpg'), image('m4.jpg'), image('mk1.jpg')],
    related: ['white-commitment-tee', 'red-voyage-tee', 'ember-rider-tee', 'olive-sentinel-hoodie'],
    category: 't-shirts',
    color: 'red',
    availability: 'low-stock',
    fit: 'regular',
  }),
  createProduct({
    slug: 'black-personal-tee',
    title: 'Black Personal Tee',
    headline: 'BLACK PERSONAL TEE',
    price: 14200,
    images: [image('m4.jpg'), image('m1.jpg'), image('mk2.jpg')],
    related: ['grey-serpentine-tee', 'charcoal-hawk-hoodie', 'molten-rogue-tee', 'crimson-oracle-tee'],
    category: 't-shirts',
    color: 'black',
    availability: 'in-stock',
    fit: 'slim',
  }),
  createProduct({
    slug: 'red-voyage-tee',
    title: 'Red Voyage Tee',
    headline: 'RED VOYAGE TEE',
    price: 14900,
    images: [image('m5.jpg'), image('m3.jpg'), image('m2.jpg')],
    related: ['red-assumption-tee', 'ember-rider-tee', 'molten-rogue-tee', 'olive-sentinel-hoodie'],
    category: 't-shirts',
    color: 'red',
    availability: 'preorder',
    fit: 'oversized',
  }),
  createProduct({
    slug: 'prism-long-sleeve',
    title: 'Prism Long Sleeve',
    headline: 'PRISM LONG SLEEVE',
    price: 15200,
    images: [image('mk1.jpg'), image('mk2.jpg'), image('mk3.jpg')],
    related: ['white-commitment-tee', 'onyx-nomad-set', 'charcoal-hawk-hoodie', 'crimson-oracle-tee'],
    category: 'long-sleeves',
    color: 'black',
    availability: 'in-stock',
    fit: 'regular',
  }),
  createProduct({
    slug: 'ember-rider-tee',
    title: 'Ember Rider Tee',
    headline: 'EMBER RIDER TEE',
    price: 14500,
    images: [image('mk2.jpg'), image('mk3.jpg'), image('mk4.jpg')],
    related: ['red-voyage-tee', 'red-assumption-tee', 'molten-rogue-tee', 'charcoal-hawk-hoodie'],
    category: 't-shirts',
    color: 'orange',
    availability: 'in-stock',
    fit: 'regular',
  }),
  createProduct({
    slug: 'molten-rogue-tee',
    title: 'Molten Rogue Tee',
    headline: 'MOLTEN ROGUE TEE',
    price: 14300,
    images: [image('mk3.jpg'), image('m1.jpg'), image('mk4.jpg')],
    related: ['grey-serpentine-tee', 'red-voyage-tee', 'ember-rider-tee', 'charcoal-hawk-hoodie'],
    category: 't-shirts',
    color: 'black',
    availability: 'in-stock',
    fit: 'regular',
  }),
  createProduct({
    slug: 'crimson-oracle-tee',
    title: 'Crimson Oracle Tee',
    headline: 'CRIMSON ORACLE TEE',
    price: 14900,
    images: [image('mk4.jpg'), image('mk3.jpg'), image('m5.jpg')],
    related: ['black-personal-tee', 'prism-long-sleeve', 'olive-sentinel-hoodie', 'onyx-nomad-set'],
    category: 't-shirts',
    color: 'crimson',
    availability: 'in-stock',
    fit: 'slim',
  }),
  createProduct({
    slug: 'olive-sentinel-hoodie',
    title: 'Olive Sentinel Hoodie',
    headline: 'OLIVE SENTINEL HOODIE',
    price: 15300,
    images: [image('p1.jpg'), image('p2.png'), image('mk2.jpg')],
    details: '80% Brushed Fleece, 20% Recycled Polyester',
    related: ['charcoal-hawk-hoodie', 'red-voyage-tee', 'ember-rider-tee', 'crimson-oracle-tee'],
    category: 'hoodies',
    color: 'olive',
    availability: 'low-stock',
    fit: 'relaxed',
  }),
  createProduct({
    slug: 'charcoal-hawk-hoodie',
    title: 'Charcoal Hawk Hoodie',
    headline: 'CHARCOAL HAWK HOODIE',
    price: 15800,
    images: [image('p2.png'), image('p1.jpg'), image('mk1.jpg')],
    details: '80% Brushed Fleece, 20% Recycled Polyester',
    related: ['olive-sentinel-hoodie', 'grey-serpentine-tee', 'prism-long-sleeve', 'molten-rogue-tee'],
    category: 'hoodies',
    color: 'charcoal',
    availability: 'in-stock',
    fit: 'oversized',
  }),
  createProduct({
    slug: 'onyx-nomad-set',
    title: 'Onyx Nomad Set',
    headline: 'ONYX NOMAD SET',
    price: 16100,
    images: [image('m2.jpg'), image('mk1.jpg'), image('mk3.jpg')],
    details: '260 GSM Cotton Top with Tech Weave Bottoms',
    related: ['white-commitment-tee', 'prism-long-sleeve', 'crimson-oracle-tee', 'charcoal-hawk-hoodie'],
    category: 'sets',
    color: 'black',
    availability: 'preorder',
    fit: 'relaxed',
  }),
];

export const productMap = products.reduce((acc, product) => {
  acc[product.slug] = product;
  return acc;
}, {});

const toTitleCase = (value) =>
  value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

const uniqueOptions = (getter) =>
  Array.from(new Set(products.map(getter))).map((value) => ({
    value,
    label: toTitleCase(value.replace('-', ' ')),
  }));

export const categories = uniqueOptions((product) => product.category);
export const fits = uniqueOptions((product) => product.fit);
export const availabilities = uniqueOptions((product) => product.availability);

const keywords = [
  't shirt',
  'hoodie',
  'tee',
  'oversized',
  'cotton',
  'black',
  'red',
  'graphic',
  'drop',
  'asntials',
];

const normalise = (value) =>
  value
    ?.toString()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim();

export const formatPrice = (value) => `Rs ${new Intl.NumberFormat('en-IN').format(value)}`;

export const toProductCard = (product) => ({
  title: product.title,
  price: formatPrice(product.price),
  img: product.images[0],
  badge: product.badge ?? undefined,
  href: `/product/${product.slug}`,
});

export const getProductBySlug = (slug) => productMap[slug];

export const getRelatedProducts = (slug, limit = 4) => {
  const product = getProductBySlug(slug);
  if (!product) return [];

  const preferred = product.related?.length ? product.related : [];
  const pool = [...preferred];

  for (const candidate of products) {
    if (candidate.slug === slug) continue;
    if (!pool.includes(candidate.slug)) {
      pool.push(candidate.slug);
    }
  }

  const selected = [];
  for (const candidateSlug of pool) {
    if (candidateSlug === slug) continue;
    const candidate = getProductBySlug(candidateSlug);
    if (!candidate) continue;
    selected.push(candidate);
    if (selected.length >= limit) break;
  }

  return selected;
};

export const searchProducts = (query, limit = 8) => {
  const term = normalise(query);
  if (!term) return [];

  const matches = products
    .map((product) => {
      const haystack = [
        product.title,
        product.headline,
        product.description,
        product.details,
      ]
        .map(normalise)
        .filter(Boolean)
        .join(' ');

      const score = haystack.includes(term) ? 2 : 0;
      const partialMatch = haystack
        .split(/\s+/)
        .some((token) => token.startsWith(term) || term.startsWith(token));

      return {
        product,
        score: score + (partialMatch ? 1 : 0),
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.product.title.localeCompare(b.product.title))
    .slice(0, limit)
    .map((entry) => entry.product);

  return matches;
};

export const getSuggestions = (query, limit = 6) => {
  const term = normalise(query);
  if (!term) return keywords.slice(0, limit);

  const suggestions = keywords.filter((word) => normalise(word).includes(term));
  if (suggestions.length < limit) {
    const additional = products
      .map((product) => product.title)
      .filter((title) => normalise(title).includes(term));
    suggestions.push(...additional);
  }

  const deduped = Array.from(new Set(suggestions));
  return deduped.slice(0, limit);
};

export const latestDropSlugs = [
  'grey-serpentine-tee',
  'white-commitment-tee',
  'red-assumption-tee',
  'black-personal-tee',
];

export const moreFromSlugs = [
  'red-voyage-tee',
  'prism-long-sleeve',
  'ember-rider-tee',
  'molten-rogue-tee',
  'crimson-oracle-tee',
  'olive-sentinel-hoodie',
  'charcoal-hawk-hoodie',
  'onyx-nomad-set',
];
