import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Angelina Vibes</h1>
          <p className="text-lg opacity-90">
            Celebrating style, creativity, and individuality since day one
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-4">
                At Angelina Vibes, we believe that fashion and art should be accessible to everyone who wants to express themselves authentically.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We curate a thoughtfully selected collection of premium apparel, stunning wall art, and quality accessories that celebrate individuality and creativity.
              </p>
              <p className="text-gray-700 text-lg">
                Our mission is simple: help you look good, feel confident, and express your unique vibe.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1556821552-5ff63b1ce251?w=600&h=600&fit=crop"
                alt="About Angelina Vibes"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 bg-gray-50 p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Creativity</h3>
              <p className="text-gray-700">
                We celebrate creative expression and believe everyone deserves to showcase their unique style.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-700">
                Every product is hand-selected for its quality, durability, and aesthetic appeal.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-700">
                We build a community of people who appreciate great style and support each other's vibes.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Angelina Vibes started with a simple idea: create a one-stop shop for people who want quality apparel and art that reflects their personality.
            </p>
            <p>
              What began as a passion project has grown into a curated marketplace featuring premium shirts, stunning wall art, and thoughtfully selected accessories. Every item in our collection is chosen because we genuinely believe in its quality and aesthetic value.
            </p>
            <p>
              Today, we serve thousands of customers who trust us to help them express their unique style. From minimalist designs to bold statements, we've got something for every vibe.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-lg opacity-90">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Products</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg opacity-90">Support</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Express Your Vibes?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Browse our collection and find pieces that speak to you. Every purchase supports our mission to celebrate creativity and individuality.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Shop Now
          </Link>
        </section>
      </div>
    </div>
  );
}
