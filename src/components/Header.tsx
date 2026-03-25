'use client';

import Link from 'next/link';
import useCartStore from '@/store/cartStore';
import { ShoppingCart, Menu } from '@/components/Icons';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Angelina Vibes
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary font-medium transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition">
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 border-t mt-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
