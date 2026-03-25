# Angelina Vibes - E-Commerce Store

A modern, full-featured e-commerce website for selling premium apparel, wall art, and accessories.

## 🌟 Features

- **Product Catalog**: Browse shirts, wall art, and accessories with detailed product pages
- **Shopping Cart**: Add items, adjust quantities, and manage your cart with real-time updates
- **Product Filtering**: Filter by category and price range
- **Responsive Design**: Beautiful UI optimized for desktop, tablet, and mobile
- **State Management**: Client-side cart management using Zustand
- **Modern Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS
- **About & Contact**: Dedicated pages for company information and customer inquiries

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory (pages & layouts)
├── components/       # Reusable React components
├── data/            # Product data and constants
├── store/           # Zustand store for state management
└── styles/          # Global styles and CSS
```

## 🎨 Key Components

- **Header**: Navigation bar with cart icon and mobile menu
- **ProductCard**: Reusable product display component
- **FilterBar**: Category and price filtering
- **Footer**: Company links and information
- **Icons**: Custom SVG icon components

## 📄 Pages

- **Home** (`/`): Hero section, featured products, categories
- **Products** (`/products`): Full product listing with filters
- **Product Detail** (`/product/[id]`): Individual product page
- **Cart** (`/cart`): Shopping cart with checkout summary
- **About** (`/about`): Company information and values
- **Contact** (`/contact`): Contact form and FAQ

## 🛠️ Scripts

```bash
npm run dev      # Run development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `globals.css` for global styles
- **Responsive design** with mobile-first approach

### Color Scheme
- Primary: Purple (#8B5CF6)
- Secondary: Pink (#EC4899)
- Accent: Amber (#F59E0B)

## 📦 Dependencies

- **Next.js**: React framework for production
- **React 18**: JavaScript library for UI
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand**: Lightweight state management

## 🔄 State Management

Cart state is managed using Zustand with the following features:
- Add/remove items
- Update quantities
- Clear cart
- Calculate totals

## 📱 Responsive Breakpoints

The design is optimized for:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 🎯 Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- User authentication and accounts
- Order tracking system
- Product reviews and ratings
- Wishlist functionality
- Search functionality
- API backend integration
- Admin dashboard

## 📝 License

This project is open source and available under the MIT License.

## 👥 Support

For questions or support, visit the Contact page or reach out to hello@angelinavibes.com 
