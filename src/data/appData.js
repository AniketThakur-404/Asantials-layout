// src/data/appData.js

// Helper so paths work locally AND when deployed under a base path
const img = (file) => `${import.meta.env?.BASE_URL ?? '/'}images/${file}`;

// ----- Products -----
export const latestDrop = [
  {
    title: 'Grey Serpentine Tee',
    price: 'Rs 14,700',
    img: img('m1.jpg'),
    badge: 'New',
    href: '/product/aeroflex',
  },
  {
    title: 'White Commitment Tee',
    price: 'Rs 14,200',
    img: img('m2.jpg'),
  },
  {
    title: 'Red Assumption Tee',
    price: 'Rs 14,200',
    img: img('m3.jpg'),
  },
  {
    title: 'Black Personal Tee',
    price: 'Rs 14,200',
    img: img('m4.jpg'),
  },
];

export const moreFrom = [
  { title: 'Red Voyage Tee',       price: 'Rs 14,900', img: img('m5.jpg') },
  { title: 'Prism Long Sleeve',   price: 'Rs 15,200', img: img('mk1.jpg') },
  { title: 'Ember Rider Tee',     price: 'Rs 14,500', img: img('mk2.jpg') },
  { title: 'Molten Rogue Tee',    price: 'Rs 14,300', img: img('mk3.jpg') },
  { title: 'Crimson Oracle Tee',  price: 'Rs 14,900', img: img('mk4.jpg') },
  { title: 'Olive Sentinel Hoodie',  price: 'Rs 15,300', img: img('p1.jpg') },
  { title: 'Charcoal Hawk Hoodie',   price: 'Rs 15,800', img: img('p2.png') },
  { title: 'Onyx Nomad Set',         price: 'Rs 16,100', img: img('m2.jpg') },
];

// ----- Stores (swap filenames to whatever you like) -----
export const storeLocations = [
  {
    city: 'Hyderabad',
    address: '101, Vimori Boulevard, Street No. 4, Green Valley, Banjara Hills',
    img: img('m1.jpg'),
  },
  {
    city: 'Delhi',
    address: 'M-81, Ground Floor, M Block Market, Greater Kailash II',
    img: img('m3.jpg'),
  },
  {
    city: 'Mumbai',
    address: 'B1, Prem Sagar Building, 4th Rd, Khar West',
    img: img('m4.jpg'),
  },
  {
    city: 'Bengaluru',
    address: '29, Indigo Block, First Main, Indiranagar',
    img: img('m5.jpg'),
  },
];
