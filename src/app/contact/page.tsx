'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:hello@angelinavibes.com" className="text-primary hover:text-secondary transition">
                  hello@angelinavibes.com
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  We typically respond within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+1-800-VIBES-01" className="text-primary hover:text-secondary transition">
                  +1 (800) VIBES-01
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Mon-Fri: 9 AM - 6 PM PST
                </p>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Creative Street<br/>
                  San Francisco, CA 94105<br/>
                  United States
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:text-secondary transition font-semibold">
                    Instagram
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition font-semibold">
                    Twitter
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition font-semibold">
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="product">Product Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  ✓ Thank you for your message! We'll get back to you soon.
                </div>
              )}
            </form>

            {/* FAQ */}
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-gray-900">
                    How long does shipping take?
                  </summary>
                  <p className="text-gray-700 mt-2">
                    Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-gray-900">
                    What's your return policy?
                  </summary>
                  <p className="text-gray-700 mt-2">
                    We offer a 30-day money-back guarantee. Items must be unused and in original packaging.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-gray-900">
                    Do you ship internationally?
                  </summary>
                  <p className="text-gray-700 mt-2">
                    Yes! We ship to over 100 countries. International shipping rates apply.
                  </p>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-gray-900">
                    How can I track my order?
                  </summary>
                  <p className="text-gray-700 mt-2">
                    You'll receive a tracking number via email once your order ships. Track it anytime in your account.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
