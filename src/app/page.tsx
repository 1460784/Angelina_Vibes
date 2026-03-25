import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=1200&h=600&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Express Your Vibes
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover curated apparel, stunning wall art, and premium accessories that represent your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Shop Now
            </Link>
            <Link
              href="#featured"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shirts */}
            <Link href="/products?category=shirts" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
                  alt="Shirts"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">👕 Shirts</h3>
                </div>
              </div>
            </Link>

            {/* Wall Art */}
            <Link href="/products?category=wall-art" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578321272176-b7babe36b01c?w=500&h=500&fit=crop"
                  alt="Wall Art"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">🎨 Wall Art</h3>
                </div>
              </div>
            </Link>

            {/* Accessories */}
            <Link href="/products?category=accessories" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
                  alt="Accessories"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">🎒 Accessories</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Products
            </h2>
            <Link href="/products" className="text-primary hover:text-secondary font-semibold transition">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Angelina Vibes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected products made from the finest materials available.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Free shipping on orders over $50. Delivery in 3-5 business days.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="font-bold text-lg mb-2">100% Guaranteed</h3>
              <p className="text-gray-600">
                Not satisfied? Full refund within 30 days, no questions asked.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Support</h3>
              <p className="text-gray-600">
                24/7 customer support to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/90 mb-8">
            Get exclusive deals, early access to new collections, and style tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
