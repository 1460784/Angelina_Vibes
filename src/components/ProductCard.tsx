'use client';

import Image from 'next/image';
import Link from 'next/link';
import useCartStore from '@/store/cartStore';
import { Star } from '@/components/Icons';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          {/* Category Badge */}
          <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-2 w-fit">
            {product.category.replace('-', ' ').toUpperCase()}
          </span>

          {/* Name */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-accent"
                filled={i < 4}
              />
            ))}
            <span className="text-xs text-gray-600 ml-1">(48 reviews)</span>
          </div>

          {/* Price and Button */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-primary hover:bg-primary/90 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
