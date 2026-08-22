/**
 * FreshMart - High Clarity HD Produce & Service Dataset
 * Curated organic vegetables, fruits, herbs, dry fruits, and subscription services
 */

const FRESHMART_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Organic Hass Avocados',
    category: 'fruits',
    categoryLabel: 'Fresh Fruits',
    price: 4.99,
    originalPrice: 6.50,
    unit: 'Pack of 3 (approx. 500g)',
    rating: 4.9,
    reviewsCount: 128,
    stock: 45,
    badge: 'Best Seller',
    isOrganic: true,
    isDeal: true,
    discountPercent: 23,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590005354167-6da97870c757?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Green Valley Organic Orchards, California',
    harvestDate: 'Picked 12 hours ago',
    shortDesc: 'Creamy, nutrient-rich Hass avocados hand-picked at peak maturity with rich healthy fats.',
    nutrition: { calories: '160 kcal', fat: '15g', carbs: '9g', fiber: '7g', protein: '2g' }
  },
  {
    id: 'prod-2',
    name: 'Heirloom Vine-Ripened Tomatoes',
    category: 'vegetables',
    categoryLabel: 'Organic Vegetables',
    price: 3.49,
    originalPrice: 4.20,
    unit: '1 kg Basket',
    rating: 4.8,
    reviewsCount: 94,
    stock: 60,
    badge: 'Today Fresh',
    isOrganic: true,
    isDeal: false,
    discountPercent: 16,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546470427-227c7369a9b6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Sunlit Valley Greenhouse Farm',
    harvestDate: 'Morning Harvest at 5:30 AM',
    shortDesc: 'Bursting with sweet, tangy authentic tomato aroma and rich in natural lycopene antioxidants.',
    nutrition: { calories: '18 kcal', fat: '0.2g', carbs: '3.9g', fiber: '1.2g', protein: '0.9g' }
  },
  {
    id: 'prod-3',
    name: 'Hydroponic English Spinach',
    category: 'vegetables',
    categoryLabel: 'Organic Vegetables',
    price: 2.29,
    originalPrice: 2.99,
    unit: '250g Bunch',
    rating: 4.9,
    reviewsCount: 162,
    stock: 80,
    badge: '100% Pesticide Free',
    isOrganic: true,
    isDeal: true,
    discountPercent: 23,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'PureAqua Hydroponics Facility',
    harvestDate: 'Harvested Today',
    shortDesc: 'Crisp, tender baby spinach leaves cultivated in nutrient-purified water without soil contaminants.',
    nutrition: { calories: '23 kcal', fat: '0.4g', carbs: '3.6g', fiber: '2.2g', protein: '2.9g' }
  },
  {
    id: 'prod-4',
    name: 'Sweet Mountain Strawberries',
    category: 'fruits',
    categoryLabel: 'Fresh Fruits',
    price: 5.99,
    originalPrice: 7.50,
    unit: '400g Clamshell',
    rating: 5.0,
    reviewsCount: 210,
    stock: 35,
    badge: 'Flash Deal',
    isOrganic: true,
    isDeal: true,
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Highland Berry Co-op, Oregon',
    harvestDate: 'Fresh Picked Yesterday',
    shortDesc: 'Intensely fragrant, naturally sweet strawberries bursting with natural Vitamin C goodness.',
    nutrition: { calories: '32 kcal', fat: '0.3g', carbs: '7.7g', fiber: '2.0g', protein: '0.7g' }
  },
  {
    id: 'prod-5',
    name: 'Fresh Italian Genovese Basil',
    category: 'herbs',
    categoryLabel: 'Fresh Herbs',
    price: 1.89,
    originalPrice: 2.40,
    unit: '100g Live Pot',
    rating: 4.7,
    reviewsCount: 78,
    stock: 50,
    badge: 'Aromatic',
    isOrganic: true,
    isDeal: false,
    discountPercent: 21,
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Meadowview Herb Botanical Garden',
    harvestDate: 'Live potted plant',
    shortDesc: 'Fragrant sweet basil with lush green leaves, ideal for pesto, pastas, and gourmet caprese salads.',
    nutrition: { calories: '22 kcal', fat: '0.6g', carbs: '2.7g', fiber: '1.6g', protein: '3.2g' }
  },
  {
    id: 'prod-6',
    name: 'Premium California Almonds (Raw Organic)',
    category: 'dry-fruits',
    categoryLabel: 'Organic Dry Fruits',
    price: 9.99,
    originalPrice: 12.99,
    unit: '500g Vacuum Pouch',
    rating: 4.9,
    reviewsCount: 340,
    stock: 110,
    badge: 'Top Rated',
    isOrganic: true,
    isDeal: true,
    discountPercent: 23,
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'San Joaquin Nut Ranch',
    harvestDate: 'Fresh 2026 Batch',
    shortDesc: 'Unsalted, unpasteurized raw almonds loaded with Vitamin E, magnesium, and plant-based protein.',
    nutrition: { calories: '579 kcal', fat: '49.9g', carbs: '21.6g', fiber: '12.5g', protein: '21.2g' }
  },
  {
    id: 'prod-7',
    name: 'Crisp Organic Bell Peppers Trio',
    category: 'vegetables',
    categoryLabel: 'Organic Vegetables',
    price: 3.89,
    originalPrice: 4.80,
    unit: 'Pack of 3 (Red, Yellow, Green)',
    rating: 4.8,
    reviewsCount: 88,
    stock: 55,
    badge: 'Rainbow Pick',
    isOrganic: true,
    isDeal: false,
    discountPercent: 19,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Rancho Vista Bio Farm',
    harvestDate: 'Morning Harvest',
    shortDesc: 'Vibrant sweet bell peppers full of crunch, antioxidants, and immune-supporting Vitamin A & C.',
    nutrition: { calories: '31 kcal', fat: '0.3g', carbs: '6.0g', fiber: '2.1g', protein: '1.0g' }
  },
  {
    id: 'prod-8',
    name: 'Jumbo Medjool Dates (Jordan Valley)',
    category: 'dry-fruits',
    categoryLabel: 'Organic Dry Fruits',
    price: 8.49,
    originalPrice: 10.99,
    unit: '450g Box',
    rating: 5.0,
    reviewsCount: 192,
    stock: 40,
    badge: 'Gourmet',
    isOrganic: true,
    isDeal: true,
    discountPercent: 22,
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Oasis Sustainable Palms',
    harvestDate: 'Natural Sun-Dried Batch',
    shortDesc: 'Soft, caramel-like rich Medjool dates with zero added sugar. The ultimate natural energy boost.',
    nutrition: { calories: '277 kcal', fat: '0.2g', carbs: '75g', fiber: '6.7g', protein: '1.8g' }
  },
  {
    id: 'prod-9',
    name: 'Fresh Spearmint & Rosemary Sprigs',
    category: 'herbs',
    categoryLabel: 'Fresh Herbs',
    price: 1.99,
    originalPrice: 2.50,
    unit: '150g Fresh Bundle',
    rating: 4.8,
    reviewsCount: 65,
    stock: 70,
    badge: 'Farm Fresh',
    isOrganic: true,
    isDeal: false,
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'High Ridge Organic Herb Farm',
    harvestDate: 'Fresh Picked Today',
    shortDesc: 'Hand-tied culinary herbs for teas, savory roasting, marinades, and craft cocktails.',
    nutrition: { calories: '44 kcal', fat: '0.9g', carbs: '8.4g', fiber: '6.8g', protein: '3.3g' }
  },
  {
    id: 'prod-10',
    name: 'Crisp Honeycrisp Apples',
    category: 'fruits',
    categoryLabel: 'Fresh Fruits',
    price: 4.29,
    originalPrice: 5.50,
    unit: '1.2 kg Bag',
    rating: 4.9,
    reviewsCount: 145,
    stock: 90,
    badge: 'Orchard Direct',
    isOrganic: true,
    isDeal: true,
    discountPercent: 22,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Cedar Falls Apple Orchards',
    harvestDate: 'Cold Storage Fresh',
    shortDesc: 'Extremely juicy and sweet with a firm, satisfying crisp crunch in every bite.',
    nutrition: { calories: '52 kcal', fat: '0.2g', carbs: '14g', fiber: '2.4g', protein: '0.3g' }
  },
  {
    id: 'prod-11',
    name: 'Organic Rainbow Baby Carrots',
    category: 'vegetables',
    categoryLabel: 'Organic Vegetables',
    price: 2.79,
    originalPrice: 3.30,
    unit: '500g Bunch with Tops',
    rating: 4.8,
    reviewsCount: 112,
    stock: 65,
    badge: 'Direct Harvest',
    isOrganic: true,
    isDeal: false,
    discountPercent: 15,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Canyon Root Farms, Colorado',
    harvestDate: 'Early Morning Pull',
    shortDesc: 'Naturally sweet heirloom purple, yellow, and orange baby carrots freshly washed.',
    nutrition: { calories: '41 kcal', fat: '0.2g', carbs: '9.6g', fiber: '2.8g', protein: '0.9g' }
  },
  {
    id: 'prod-12',
    name: 'Organic Raw Walnuts Halves',
    category: 'dry-fruits',
    categoryLabel: 'Organic Dry Fruits',
    price: 11.49,
    originalPrice: 14.50,
    unit: '500g Kraft Pouch',
    rating: 4.9,
    reviewsCount: 178,
    stock: 50,
    badge: 'Omega-3 Rich',
    isOrganic: true,
    isDeal: true,
    discountPercent: 21,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80'
    ],
    farmOrigin: 'Sierra Foothills Nut Groves',
    harvestDate: 'Cold Shelled 2026',
    shortDesc: 'Crisp, brain-boosting organic walnut halves packed with plant-based Omega-3 fatty acids.',
    nutrition: { calories: '654 kcal', fat: '65g', carbs: '14g', fiber: '6.7g', protein: '15g' }
  }
];

// Helper to find product by id
function getProductById(id) {
  return FRESHMART_PRODUCTS.find(p => p.id === id);
}
