'use client';

import { categories } from '@/data/products';
import { ChevronDown } from '@/components/Icons';

interface FilterBarProps {
  selectedCategory: string | null;
  selectedPrice: string;
  onCategoryChange: (category: string | null) => void;
  onPriceChange: (price: string) => void;
}

export default function FilterBar({
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
}: FilterBarProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <h2 className="text-lg font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === null}
              onChange={() => onCategoryChange(null)}
              className="mr-3"
            />
            <span className="text-gray-700">All Products</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => onCategoryChange(cat.id)}
                className="mr-3"
              />
              <span className="text-gray-700">
                {cat.emoji} {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100+', label: '$100+' },
          ].map((option) => (
            <label key={option.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={selectedPrice === option.value}
                onChange={(e) => onPriceChange(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
