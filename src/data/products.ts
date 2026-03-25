export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'shirts' | 'wall-art' | 'accessories';
  image: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  // Shirts
  {
    id: 'shirt-1',
    name: 'Classic Vibes T-Shirt',
    description: 'Comfortable cotton t-shirt perfect for everyday wear. Premium quality with vibrant colors.',
    price: 29.99,
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=500&h=500&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy', 'Gray', 'Purple'],
    inStock: true,
  },
  {
    id: 'shirt-2',
    name: 'Minimalist Crewneck',
    description: 'Sleek and modern crewneck sweater. Perfect layering piece for any season.',
    price: 49.99,
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Cream', 'Sage'],
    inStock: true,
  },
  {
    id: 'shirt-3',
    name: 'Oversized Fit Hoodie',
    description: 'Cozy oversized hoodie with kangaroo pocket. Ultimate comfort wear.',
    price: 59.99,
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=500&h=500&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Brown'],
    inStock: true,
  },
  {
    id: 'shirt-4',
    name: 'Vintage Band Tee',
    description: 'Retro-inspired band tee with faded print. Perfect for any music lover.',
    price: 34.99,
    category: 'shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Faded Black', 'Faded Blue'],
    inStock: true,
  },

  // Wall Art
  {
    id: 'art-1',
    name: 'Abstract Sunset',
    description: 'Beautiful abstract wall art featuring warm sunset colors. Modern aesthetic for any room.',
    price: 79.99,
    category: 'wall-art',
    image: 'https://images.unsplash.com/photo-1578321272176-b7babe36b01c?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578321272176-b7babe36b01c?w=500&h=500&fit=crop',
    ],
    inStock: true,
  },
  {
    id: 'art-2',
    name: 'Geometric Patterns',
    description: 'Minimalist geometric wall art with bold lines. Contemporary design element.',
    price: 89.99,
    category: 'wall-art',
    image: 'https://images.unsplash.com/photo-1570129477492-45e003008e2e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45e003008e2e?w=500&h=500&fit=crop',
    ],
    inStock: true,
  },
  {
    id: 'art-3',
    name: 'Nature Canvas',
    description: 'Serene nature landscape on premium canvas. Brings calmness to your space.',
    price: 99.99,
    category: 'wall-art',
    image: 'https://images.unsplash.com/photo-1549887534-f81f00370742?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549887534-f81f00370742?w=500&h=500&fit=crop',
    ],
    inStock: true,
  },
  {
    id: 'art-4',
    name: 'Urban City Vibes',
    description: 'Modern skyline art with vibrant neon colors. Perfect for contemporary spaces.',
    price: 109.99,
    category: 'wall-art',
    image: 'https://images.unsplash.com/photo-1578321272176-b7babe36b01c?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578321272176-b7babe36b01c?w=500&h=500&fit=crop',
    ],
    inStock: true,
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'Essential Cap',
    description: 'Classic adjustable baseball cap. Perfect complement to any outfit.',
    price: 24.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop',
    ],
    colors: ['Black', 'White', 'Navy', 'Stone'],
    inStock: true,
  },
  {
    id: 'acc-2',
    name: 'Premium Beanie',
    description: 'Warm knit beanie with soft interior. Perfect for cold weather.',
    price: 19.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1559631273-e42bb4723e11?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559631273-e42bb4723e11?w=500&h=500&fit=crop',
    ],
    colors: ['Black', 'Charcoal', 'Cream', 'Forest Green'],
    inStock: true,
  },
  {
    id: 'acc-3',
    name: 'Canvas Backpack',
    description: 'Durable canvas backpack with multiple compartments. Great for work or travel.',
    price: 69.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    ],
    colors: ['Black', 'Olive', 'Tan'],
    inStock: true,
  },
  {
    id: 'acc-4',
    name: 'Signature Tote Bag',
    description: 'Spacious tote bag with inner pockets. Perfect for everyday essentials.',
    price: 44.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548127083-451c05f9a11e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548127083-451c05f9a11e?w=500&h=500&fit=crop',
    ],
    colors: ['Navy', 'Natural', 'Black'],
    inStock: true,
  },
];

export const categories = [
  { id: 'shirts', label: 'Shirts', emoji: '👕' },
  { id: 'wall-art', label: 'Wall Art', emoji: '🎨' },
  { id: 'accessories', label: 'Accessories', emoji: '🎒' },
];
