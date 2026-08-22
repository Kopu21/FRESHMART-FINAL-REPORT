# 🌿 FreshMart - Multipurpose Organic Market & Services HTML5 Template

**FreshMart** is a commercial-grade, modern, and multipurpose HTML5 / TailwindCSS template engineered for local produce markets, farm-to-table delivery subscriptions, organic groceries, and B2B produce wholesale services. Built for maximum conversion, rapid development, and easy customization for marketplaces like ThemeForest, TemplateMonster, and client projects.

---

## 🌟 Key Features

- **Single-Line Brand Logo & Organic Iconography**: Locked single-line branding `[Icon] FreshMart` with clean SVG vectors.
- **Light & Dark Theme Engine**: Instant theme switcher with smooth color transitions and persistent state via `localStorage`.
- **RTL (Right-to-Left) Language Compatibility**: 1-click RTL toggle button supporting Arabic, Hebrew, and Persian layouts out-of-the-box.
- **Live Interactive Shopping Cart Drawer**:
  - Quantity increment/decrement math.
  - Dynamic subtotal & delivery calculation.
  - Free morning shipping milestone progress bar ($35 threshold).
  - Floating toast notification alerts.
- **Dedicated Authentication Suite**:
  - Standalone `login.html` with 1-click demo autofill and password visibility toggle.
  - Standalone `register.html` with Retail Household vs Commercial B2B Wholesale account selection.
- **Complete Admin Dashboard Suite**:
  - `admin/index.html`: Revenue analytics line graph and category share doughnut chart powered by **Chart.js**.
  - `admin/orders.html`: Real-time filterable order table (Pending, Dispatched, Delivered) and printable invoice modal.
  - `admin/products.html`: Produce inventory manager with live "Add New Produce" modal.
  - `admin/users.html`: Customer and wholesale client database.
  - `admin/messages.html`: Wholesale quotation RFQ inbox and response composer.
- **Produce Market Specials (Category 14)**:
  - Daily Deals live countdown timer.
  - Interactive Seasonal Produce calendar with ripeness indicators.
  - Farm Sourcing & batch QR traceability showcase.
  - Live Zip / Postal Code delivery slot checker.
  - Checkable recipe ingredients lists in blog posts.
  - Interactive Bulk Order Estimator with volume discount logic.
- **High Clarity HD Produce Imagery**: Curated high-resolution organic photography with smooth hover zoom effects.
- **Zero Heavy Dependencies**: Pure HTML5, TailwindCSS (via CDN / custom classes), and Vanilla JavaScript for lightning-fast 100/100 PageSpeed scores.

---

## 📁 Directory Structure

```
freshmart-template/
├── index.html                   # Home Page 1: Fresh Produce & Daily Deals Landing
├── home-services.html           # Home Page 2: Farm-to-Table Subscriptions & B2B Supply
├── about.html                   # About Us: Mission, Team, Farm Partners, Milestones
├── products.html                # Products Catalog: Filters, Live Search, Price Slider
├── product-details.html         # Single Product Details: HD Gallery, Bulk Tiers, Nutrition, FAQs
├── farm-sourcing.html           # Farm Sourcing & Batch Traceability
├── seasonal-guide.html          # Interactive Seasonal Produce Calendar
├── delivery-coverage.html       # Delivery Coverage & Live Pincode Checker
├── pricing.html                 # Subscription Veggie Boxes & Wholesale Pricing Plans
├── blog.html                    # Blog & Recipes Hub (Filterable)
├── blog-details.html            # Recipe Details with Checkable Ingredients List
├── contact.html                 # Contact Us & Interactive Bulk Order RFQ Form
├── login.html                   # Dedicated Standalone Login Page
├── register.html                # Dedicated Standalone Registration Page
├── 404.html                     # 404 Error Page
├── coming-soon.html             # Coming Soon & Maintenance Page with Countdown
│
├── admin/                       # Admin Dashboard Suite
│   ├── index.html               # Analytics Overview & Chart.js Visualizations
│   ├── orders.html              # Orders Management & Invoice Modal
│   ├── products.html            # Inventory & Add Product Modal
│   ├── users.html               # Customer & Vendor Database
│   └── messages.html            # Wholesale Inquiries Inbox
│
└── assets/
    ├── css/
    │   └── style.css            # Custom CSS animations, glassmorphism, scrollbars, RTL fixes
    └── js/
        ├── theme.js             # Theme (Dark/Light) and Direction (LTR/RTL) engine
        ├── cart.js              # Live mini-cart drawer, subtotal calculation & toast alerts
        ├── products-data.js     # Curated HD produce dataset
        ├── main.js              # Search, countdown timers, modals & pincode validator
        └── admin.js             # Chart.js initializations & admin modal handlers
```

---

## 🚀 Getting Started

1. **Direct Browser Preview**: Open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox).
2. **Local Development Server**: You can also use VSCode Live Server, `npx serve`, or Python's HTTP server:
   ```bash
   # Using Python:
   python -m http.server 3000
   
   # Using Node.js serve:
   npx serve .
   ```
3. **Admin Dashboard Preview**: Navigate to `admin/index.html` or click on **"Admin Dashboard 📊"** from the top header navigation.

---

## 🎨 Customizing Brand & Theme Colors

You can easily adjust the primary color palette inside the `<script>` Tailwind configuration block located in the `<head>` of any HTML page:

```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#10b981', // Your custom primary green
          600: '#059669', // Primary hover
          700: '#047857'
        }
      }
    }
  }
}
```

---

## 📄 License & Attribution

Designed and created for multipurpose commercial service websites, grocery businesses, and digital marketplaces. All Unsplash photography is free for commercial and editorial usage under the Unsplash License.
