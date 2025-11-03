// src/data/appData.js
import { latestDropSlugs, moreFromSlugs, productMap, toProductCard } from './products';

// Helper so paths work locally AND when deployed under a base path
const img = (file) => `${import.meta.env?.BASE_URL ?? '/'}images/${file}`;

const mapCardData = (slugs) =>
  slugs
    .map((slug) => productMap[slug])
    .filter(Boolean)
    .map((product) => toProductCard(product));

// ----- Products -----
export const latestDrop = mapCardData(latestDropSlugs);
export const moreFrom = mapCardData(moreFromSlugs);

// ----- Stores -----
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
