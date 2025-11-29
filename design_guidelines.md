# Design Guidelines: ByFrom Store Homepage

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Etsy/Miniso**: Approachable product showcase with personality
- **Korean kawaii e-commerce** (like Stylenanda, Chuu): Pastel aesthetics, playful layouts
- **Japanese stationery sites** (San-X, Sanrio): Soft, cheerful atmosphere
- **Instagram Shop layouts**: Visual-first product grids

The design embraces a modern kawaii aesthetic with pastel colors, rounded elements, and a cheerful marketplace feel optimized for Telegram-based ordering.

## Color System

**Primary Palette:**
- Pink: #FDE2E4 (hero backgrounds, accent elements, category hover states)
- Cream: #FFF5E1 (page background, card backgrounds, alternating sections)
- Baby Blue: #B5EAEA (CTA buttons, badges, decorative accents)
- Light Brown: #C9A78B (text accents, borders, secondary buttons)
- Peach: #FFD6A5 (highlights, special offers, preorder banners)

**Application Strategy:**
- Backgrounds: Cream base with pink/peach section overlays
- Cards: White/cream with pastel borders
- Buttons: Baby blue primary, light brown secondary
- Badges/labels: Peach with light brown text
- Borders: Light brown at 20% opacity

## Typography System

**Font Families:**
- Primary: 'Quicksand' (Google Fonts) - soft, rounded headers
- Secondary: 'Inter' (Google Fonts) - clean body text
- Accent: 'Fredoka' (Google Fonts) - playful CTAs and kawaii labels

**Hierarchy:**
- Hero text: text-5xl to text-6xl, font-bold
- Section headers: text-3xl to text-4xl, font-semibold
- Product names: text-xl, font-medium
- Body text: text-base to text-lg
- Labels/badges: text-sm, font-medium, uppercase tracking-wide

## Layout System

**Spacing primitives:** Tailwind units of 3, 4, 6, 8, and 12
- Component padding: p-4, p-6
- Section spacing: py-12 to py-16
- Card gaps: gap-6, gap-8
- Element margins: m-3, m-4, m-6

**Container Strategy:**
- Max-width: max-w-7xl for main content
- Product grids: max-w-6xl centered
- Full-width colored section backgrounds

## Core Components

### Preorder Announcement Banner
Sticky top banner (above nav) with peach background:
- Icon + text layout (Heroicons megaphone icon)
- Centered announcement text
- Dismissible close button (right-aligned)
- Padding: py-3, px-6
- Soft shadow beneath

### Navigation Bar
Sticky header with cream background and light brown bottom border:
- Logo left-aligned (brand name in Fredoka font)
- Center: Category links (Pakaian, Celana, Sepatu, Makanan)
- Right: Telegram contact button (baby blue background, white text)
- Mobile: Hamburger menu with full-screen pink overlay

### Hero Section
Large hero image showcasing kawaii product lifestyle:
- Height: h-96 on desktop, h-80 on mobile
- Image: Flat lay of cute products with pastel props
- Centered content overlay with blurred background panel (backdrop-blur-md)
- Main heading: "ByFrom Store" in Fredoka (text-6xl)
- Subheading: Tagline about cute products and easy Telegram ordering
- CTA button: "Lihat Katalog" (baby blue background, no hover interactions, blurred backdrop)
- Floating kawaii decorative elements (stars, hearts) around edges

### Category Cards Section
4-column grid (desktop), 2-column (tablet), 1-column (mobile):
- Square cards with rounded-3xl corners
- Each card:
  - Category image background (16:9 aspect ratio)
  - Gradient overlay (cream to transparent)
  - Category name (text-2xl, Fredoka font)
  - Product count badge (peach background, rounded-full)
  - Hover: lift effect with increased shadow

Categories: Pakaian, Celana, Sepatu, Makanan

### Featured Products Grid
3-column layout (desktop), 2-column (tablet), 1-column (mobile):
- Product cards with white background, rounded-2xl
- Soft shadow: shadow-lg with pink tint
- Each card contains:
  - Square product image (1:1 ratio, rounded-xl)
  - Category badge (top-right, peach background, rounded-full)
  - Product name (text-lg, Quicksand)
  - Price (text-2xl, font-bold, light brown color)
  - "Pesan via Telegram" button (baby blue, full-width, rounded-lg)
- Hover: subtle scale (1.02) and shadow increase

### Contact Section
2-column layout (desktop), stacked (mobile):
- Left column: Contact information with kawaii icons (Heroicons)
  - Telegram contact (prominent baby blue button)
  - Operating hours (clock icon)
  - Response time info (sparkles icon)
- Right column: Decorative illustration placeholder or additional info
- Background: alternating pink section
- Padding: py-16

### Footer
Single-column centered layout with cream background:
- Brand logo and tagline
- Social media icons (Heroicons, baby blue on hover)
- Quick links row (categories, about, ordering guide)
- Copyright text (text-sm, light brown)
- Decorative wave divider at top

## Images

**Required Images:**

1. **Hero Image**: Kawaii lifestyle flat lay - pastel products arranged with cute props (flowers, stickers, plushies), soft natural lighting, overhead shot. Full-width background, 1920x800px minimum.

2. **Category Images** (4 images):
   - Pakaian: Folded cute clothing with pastel colors
   - Celana: Styled pants display with accessories
   - Sepatu: Shoes arranged with kawaii props
   - Makanan: Packaged snacks/treats in pastel packaging
   Each: 800x800px square, soft studio lighting

3. **Product Images**: Square format (1:1), 800x800px minimum, white or cream background, centered products with soft shadows

4. **Decorative Elements**: Kawaii icons/illustrations (hearts, stars, sparkles) as floating SVG elements - use Heroicons with custom styling

## Special Features

### Trust Indicators
Below hero section, horizontal scrollable row:
- Customer count badge ("500+ Pelanggan Senang")
- Order completion badge ("1000+ Pesanan Selesai")
- Fast response badge ("Respon <1 Jam")
- Each badge: peach background, rounded-full, icon + text

### Product Quick View
Clicking product card opens modal overlay:
- Large product image carousel
- Product details panel with pastel background
- Sticky bottom CTA (Telegram button)
- Close button (top-right, light brown)

### Kawaii Decorative Touches
- Floating heart/star elements at section boundaries
- Soft wave dividers between major sections
- Rounded pill badges throughout
- Icon accents (Heroicons) with pastel fills

## Animation Guidelines

Minimal, cheerful animations:
- Card hover: scale(1.02) with shadow growth (150ms ease-out)
- Button hover: brightness adjustment only
- Scroll fade-in for product cards (stagger 50ms)
- Badge pulse on preorder banner (subtle, slow)
- NO complex parallax or scroll-driven effects

## Responsive Behavior

**Breakpoints:**
- Mobile-first (base): Single column, stacked layout
- Tablet (md:): 2-column grids
- Desktop (lg:): 3-4 column grids

**Mobile Optimizations:**
- Fixed bottom Telegram button (baby blue, full-width)
- Larger touch targets (min-h-12)
- Horizontal scroll category filters
- Simplified navigation (hamburger menu)
- Reduced vertical spacing (py-8 instead of py-12)

## Accessibility

- High contrast text (light brown on cream backgrounds)
- Alt text for all product/category images
- Keyboard navigation for all interactive elements
- Focus rings using baby blue color
- Semantic HTML with proper heading hierarchy
- ARIA labels for icon-only buttons