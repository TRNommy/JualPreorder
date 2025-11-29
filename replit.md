# BYFROM A'Ling - E-commerce Platform

## Overview

BYFROM A'Ling is an e-commerce web application for "Home Made A'ling" - a pre-order based marketplace selling Jastip (personal shopping services), skincare products, and homemade food items. The platform features a warm, handmade marketplace aesthetic inspired by Etsy, Korean/Japanese e-commerce, and Instagram Shop layouts, emphasizing a cute, approachable product showcase with a visual-first design.

The application is built as a full-stack TypeScript application using React on the frontend with Vite as the build tool, Express.js on the backend, and Drizzle ORM for database operations. It implements a modern component-based architecture using shadcn/ui components and TailwindCSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for Replit integration
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: TailwindCSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)

**Design System:**
- Custom typography using Google Fonts (Quicksand, Inter, Fredoka)
- Tailwind-based spacing system (units: 3, 4, 6, 8, 12)
- Custom color palette with HSL-based CSS variables
- Component styling with `class-variance-authority` for variant management
- Hover and active state elevation patterns using CSS custom properties

**Component Architecture:**
- Reusable UI components in `client/src/components/ui/` (shadcn/ui library)
- Feature components in `client/src/components/`:
  - Header (navigation menu with mobile responsive, Telegram CTA, kawaii branding)
  - Hero (preorder announcement banner with date/time, Lucide icons)
  - PromoCarousel (3 kawaii banners auto-rotating after Hero, smooth transitions, nav controls)
  - CategoryCards (4 category cards with generated illustrations, hover effects, Telegram CTAs)
  - CategoryFilter (product filtering by category)
  - ProductCard (with category, dual currency pricing USD/Riel, pre-order info)
  - ProductGrid (filterable product display)
  - ProductDetailModal (detailed product view with dual currency and Telegram ordering)
  - ContactSection (3 contact cards: Telegram/Instagram/Email with trust badges)
  - Footer (simplified kawaii design with contact info)
- Page-level components in `client/src/pages/`
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Page Layout Order:**
1. Header (sticky navigation)
2. Hero (preorder announcement)
3. PromoCarousel (3 promotional banners)
4. CategoryCards (4 category showcase)
5. Products (filterable product grid)
6. ContactSection (3 contact methods)
7. Footer

**Key Features:**
- Kawaii pastel homepage with custom color scheme and Fredoka font branding
- Product catalog with category filtering (Jastip, Skincare, Makanan Rumahan)
- Product detail modal views with pre-order information
- Promotional banner carousel (3 kawaii banners, auto-rotating every 5 seconds)
- Hero section with special preorder announcement (22 November, 11:00-12:00)
- CategoryCards showcase (Pakaian, Celana, Sepatu, Makanan) with generated illustrations
- Telegram integration for customer orders (pre-filled messages)
- Contact section with trust badges (fast response, friendly service, trusted seller)
- Responsive mobile-first design with kawaii aesthetic
- Static asset management for product and promotional images
- Icon-based UI using Lucide React (no text emojis)

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **ORM**: Drizzle ORM for type-safe database queries
- **Database**: PostgreSQL (via Neon serverless driver)
- **Build**: esbuild for production bundling

**Server Structure:**
- `/server/index.ts` - Main Express application entry point with middleware setup
- `/server/routes.ts` - API route registration (currently minimal implementation)
- `/server/storage.ts` - Data access layer with in-memory fallback implementation
- `/server/vite.ts` - Vite development server integration for HMR

**Storage Pattern:**
- Interface-based storage abstraction (`IStorage`)
- Current implementation: `MemStorage` (in-memory storage for development)
- Designed for easy migration to database-backed storage
- CRUD operations for Users and Products (schema-defined)

**Middleware Configuration:**
- JSON body parsing with raw body preservation (for webhook verification)
- URL-encoded form data support
- Request/response logging for API routes
- Custom response interception for debugging

### Database Schema

**Technologies:**
- Drizzle ORM with PostgreSQL dialect
- Zod for schema validation
- Type generation for TypeScript integration

**Tables:**

1. **users**
   - `id` (varchar, UUID primary key)
   - `username` (text, unique, not null)
   - `password` (text, not null)

2. **products**
   - `id` (varchar, UUID primary key)
   - `name` (text, not null)
   - `category` (text, not null)
   - `price` (integer, not null)
   - `description` (text, not null)
   - `preOrderDays` (integer, not null)
   - `image` (text, not null)

**Schema Management:**
- Drizzle Kit configured for migrations (`drizzle.config.ts`)
- Schema definitions in `/shared/schema.ts` for cross-environment type sharing
- `db:push` script for schema synchronization

### External Dependencies

**Database:**
- **Neon Serverless PostgreSQL**: Cloud-hosted PostgreSQL database
- Connection via `@neondatabase/serverless` driver
- Connection string via `DATABASE_URL` environment variable

**Third-Party Services:**
- **Telegram**: Primary customer communication and ordering channel
  - Deep links with pre-filled messages for product orders
  - Contact: @byfromstore (https://t.me/byfromstore)
- **Instagram**: Social media presence at @byfrom.l
- **Email**: Customer support at bsoalyuk@gmail.com

**Pricing:**
- **Currency**: USD ($) and Cambodian Riel (៛)
- **Conversion Rate**: 1 USD = 4,000 Riel
- **Display Format**: Dual currency shown on all products (e.g., "$60 / ៛240,000")

**Recent Updates (November 2025):**
- **Kawaii Pastel Homepage Redesign**: Full redesign with kawaii pastel color palette (pink #FDE2E4, cream #FFF5E1, baby blue #B5EAEA, light brown #C9A78B, peach #FFD6A5, mint #CAF7E3, light yellow #FFFFE1)
- **Clean Promotional Banners**: Created 3 polished kawaii-style promotional banners with clean professional design:
  - Banner 1: Preorder announcement (22 Nov, 11:00-12:00) - Fruit Sandwich & Brownies with cute illustrations
  - Banner 2: 50% discount (Diskon 50%!!) for all categories - Starting from $5/៛20,000 with adorable product icons
  - Banner 3: Featured products of the week (Fruit Sandwich, Brownies, Mini Cake)
  - All banners include contact information (Telegram, Instagram, Email) in bottom corner
  - Fixed: Removed visible hex color codes for professional appearance
  - Positioned: Moved after Hero section for better visual flow
- **Currency System**: Changed from Rupiah to USD/Riel dual currency display
  - All product prices show both $ and ៛ (1 USD = 4,000 Riel)
  - Format: "$XX / ៛XX,XXX" (e.g., "$60 / ៛240,000")
- **Component Updates**:
  - Header: New navigation menu with kawaii styling (4 items: Home, Produk, Preorder, Hubungi Kami) with "BYFROM A'Ling" branding
  - Hero: 2-column layout with kawaii preorder banner (left: text content, right: kawaii illustration banner), fully responsive with centered mobile layout
  - PromoCarousel: Positioned after Hero section, 3 kawaii banners auto-rotating (5-second intervals)
  - CategoryCards: 4 categories (Pakaian, Celana, Sepatu, Makanan) with hover effects
  - ProductCard: Dual currency pricing (USD/Riel)
  - ContactSection: 3 contact cards with trust badges
  - Footer: Simplified kawaii design with "BYFROM A'Ling" branding
- **Icon System**: Replaced all text emojis with Lucide React icons per design guidelines
- **Fixed Issues**:
  - Special characters (%) in asset filenames cause 400 errors - renamed files to use "pct" instead
  - All hover states use built-in elevation utilities
- **Contact Information**: Telegram @byfromstore (t.me/byfromstore), Instagram @byfrom.l, Email bsoalyuk@gmail.com

**Branding**: "BYFROM A'Ling" (Home Made A'ling)

**Recent Product Updates (November 2025):**
- Updated "Sandwich" product with real packaging photo
- Changed price to $2 / ៛8,000 (affordable entry-level product)
- Simplified product name from "Sandwich & Cookies Homemade" to just "Sandwich"

- Automated testing confirms all features functional

**UI Component Libraries:**
- **Radix UI**: Headless UI primitives for accessible components
- **shadcn/ui**: Pre-built component collection based on Radix UI
- **Lucide React**: Icon library

**Styling & Utilities:**
- **TailwindCSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Class name utilities

**Development Tools:**
- **Replit Plugins**: Cartographer, dev banner, runtime error overlay
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Fast HMR and optimized production builds

**Fonts:**
- **Google Fonts API**: Quicksand, Inter, Fredoka font families
- Preconnect optimizations for performance

**Data Fetching:**
- **TanStack Query**: Server state management with caching
- Custom query client configuration with error handling