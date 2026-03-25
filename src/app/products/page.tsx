'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (selectedPrice === '0-50') {
      filtered = filtered.filter(p => p.price <= 50);
    } else if (selectedPrice === '50-100') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
    } else if (selectedPrice === '100+') {
      filtered = filtered.filter(p => p.price >= 100);
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.reverse();
    }

    return filtered;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">All Products</h1>
          <p className="text-gray-600 mt-2">
            Discover our complete collection of premium apparel and art
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <FilterBar
              selectedCategory={selectedCategory}
              selectedPrice={selectedPrice}
              onCategoryChange={setSelectedCategory}
              onPriceChange={setSelectedPrice}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-700 font-medium">
                Showing {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPrice('all');
                  }}
                  className="mt-4 text-primary hover:text-secondary font-semibold transition"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
