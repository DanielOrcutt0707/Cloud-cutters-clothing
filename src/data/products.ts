export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Tees' | 'Hoodies' | 'Hats';
  images: string[];
  drop: string;
  limited: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'METAR Essential Tee',
    description: 'Premium heavyweight cotton tee featuring a clean, minimalist METAR weather report graphic. A Cloud Cutters original.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-tee-metar.png', '/images/products/tee-metar-graphic.png'],
    drop: 'Drop 01: Clear Skies',
    limited: true,
  },
  {
    id: '2',
    name: 'Horizon Tee',
    description: 'White tee with a sleek attitude indicator graphic representing the horizon line. Designed by the Cloud Cutters collective.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-tee-horizon.png', '/images/products/tee-horizon-graphic.png'],
    drop: 'Drop 01: Clear Skies',
    limited: true,
  },
  {
    id: '3',
    name: 'Flight Tag Tee',
    description: 'Minimalist tee inspired by the iconic "Remove Before Flight" tags found on aircraft. A staple piece of Cloud Cutters streetwear.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-tee-flight-tag.png', '/images/products/tee-flight-tag-graphic.png'],
    drop: 'Drop 01: Clear Skies',
    limited: false,
  },
  {
    id: '4',
    name: 'Atmosphere Hoodie',
    description: 'Premium black hoodie with abstract atmospheric pressure line graphics. Engineered for comfort and style by Cloud Cutters.',
    price: 75,
    category: 'Hoodies',
    images: ['/images/products/mockup-hoodie-atmosphere.png', '/images/products/hoodie-atmosphere-graphic.png'],
    drop: 'Drop 01: Clear Skies',
    limited: true,
  },
  {
    id: '5',
    name: 'Vector Heavyweight Hoodie',
    description: 'Technical hoodie featuring vector-based flight path geometry on the back. A signature Cloud Cutters design.',
    price: 75,
    category: 'Hoodies',
    images: ['/images/products/mockup-hoodie-vector.png', '/images/products/hoodie-vector-graphic.png'],
    drop: 'Drop 01: Clear Skies',
    limited: true,
  },
  {
    id: '6',
    name: 'Squawk 7700 Hat',
    description: 'Classic 6-panel dad hat with embroidered "7700" squawk code. The ultimate Cloud Cutters accessory.',
    price: 30,
    category: 'Hats',
    images: ['/images/products/mockup-hat-squawk.png', '/images/products/hat-squawk-graphic.png'],
    drop: 'Drop 01: Clear Skies',
    limited: false,
  },
  {
    id: '7',
    name: 'Hercules Tattoo Tee',
    description: 'Vintage-style tee featuring the C-130 Hercules in a traditional American tattoo flash aesthetic. Part of the Flash & Fuel collection.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-hercules-tee.png'],
    drop: 'Drop 02: Flash & Fuel',
    limited: true,
  },
  {
    id: '8',
    name: 'Stratotanker Tattoo Tee',
    description: 'KC-135 Stratotanker design in a bold tattoo style. Celebrates the backbone of global reach. Heavy metal in every stitch.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-stratotanker-tee.png'],
    drop: 'Drop 02: Flash & Fuel',
    limited: true,
  },
  {
    id: '9',
    name: 'Stratofortress Tattoo Tee',
    description: 'The iconic B-52 Stratofortress reimagined as a traditional tattoo. A tribute to long-range endurance and heritage.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-stratofortress-tee.png'],
    drop: 'Drop 02: Flash & Fuel',
    limited: true,
  },
  {
    id: '10',
    name: 'Warthog Tattoo Tee',
    description: 'A-10 Warthog with its signature nose art, rendered in a striking tattoo style. Built for the close air support community.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-warthog-tee.png'],
    drop: 'Drop 02: Flash & Fuel',
    limited: true,
  },
  {
    id: '11',
    name: 'Globemaster Tattoo Tee',
    description: 'C-17 Globemaster III cargo plane in a clean tattoo flash style. For those who move the world.',
    price: 35,
    category: 'Tees',
    images: ['/images/products/mockup-globemaster-tee.png'],
    drop: 'Drop 02: Flash & Fuel',
    limited: true,
  },
];
