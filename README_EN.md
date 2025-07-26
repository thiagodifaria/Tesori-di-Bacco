# Tesori di Bacco - Premium Wine Club

> **Important Note**: This is a personal project developed exclusively for study purposes and demonstration of front-end development skills. It was born from the combination of my passion for wines, rich Italian culture, and programming. Although the website and entire experience may seem real and professional, this is only a fictional project created to explore modern technologies and UX/UI concepts. All data is simulated and does not represent a real company or service.

## 🌐 Online Demo

**Access the application in real time**: [https://tesoridibacco.netlify.app/](https://tesoridibacco.netlify.app/)

The application is hosted on Netlify with automatic deployment and can be fully tested online. Explore all features, browse the wine catalog, test the subscription system, and discover the complete Tesori di Bacco experience directly in your browser.

## 🔐 Test Credentials

To test the authentication system and different access levels, use the following pre-registered user credentials:

### Available Test Users

| **Email** | **Password** | **Tier** | **Description** |
|-----------|-------------|----------|-----------------|
| `explorador@gmail.com` | `senha123` | Il Principiante | Basic tier for beginners |
| `curioso@gmail.com` | `senha123` | L'Esploratore | Most popular tier |
| `sobmedida@gmail.com` | `senha123` | L'Intenditore | Intermediate tier |
| `colecionador@gmail.com` | `senha123` | Il Raffinato | Advanced tier |
| `conoscitore@gmail.com` | `senha123` | O Conoscitore Supremo | Premium tier |
| `elitedibacco@gmail.com` | `senha123` | L'Elite di Bacco | Exclusive VIP tier |

> **Tip**: Each user has different access levels and benefits. Test with different accounts to experience all features available in each subscription tier.

## 📕 Description

Tesori di Bacco is a sophisticated front-end web application conceived as an exclusive platform for a premium wine club inspired by Italian tradition. This project was meticulously developed using modern technologies to provide users with a rich and elegant digital experience, centered on the discovery and appreciation of selected wines. The application architecture follows modern React componentization patterns, offering fluid navigation between a comprehensive catalog of artisanal wines, different exclusive subscription levels, partnerships with renowned restaurants, and specialized editorial content about the wine universe. The system stands out for its refined visual identity, responsive interface built with Tailwind CSS, robust simulated authentication system, and a carefully crafted user experience that reflects the elegance and tradition of Italian wine culture.

## 📸 Screenshots

### Homepage
![Homepage & Age Verification](public/images/screenshots/homepage.png)

### Wine Catalog - La Collezione Frescobaldi
![Wine Catalog - La Collezione Frescobaldi](public/images/screenshots/catalogo_de_vinhos.png)

### Subscription System
![Subscription System](public/images/screenshots/sistema_de_assinatura.png)

### Tavole del Gusto - Partner Restaurants
![Tavole del Gusto - Partner Restaurants](public/images/screenshots/restaurantes.png)

### Il Diario del Sommelier - Editorial Blog
![Il Diario del Sommelier - Editorial Blog](public/images/screenshots/blog.png)

## 🍷 Features

- ✅ **Age Verification System**: Entry portal with CPF validation and terms acceptance
- ✅ **Complete Wine Catalog**: Detailed exploration of "La Collezione Frescobaldi"
  - **Advanced Filters**: By region, grape, producer, vintage, style and price range
  - **Smart Search**: By wine name or producer
  - **Responsive Interface**: Adaptable filters for mobile
- ✅ **Immersive Detail Pages**: Complete information about wines and producers
  - **Tasting Notes**: Aromatic profile and sensory analysis
  - **Detailed Pairing**: Gastronomic suggestions with recipes
  - **Gastronomic Partnerships**: Restaurants that serve each wine
- ✅ **Subscription System**: Six levels of exclusive plans
  - **Public Plans**: From beginner to supreme connoisseur
  - **VIP Plans**: Invitation-only access for elite members
  - **Member Area**: Personalized dashboard with history
- ✅ **Tavole del Gusto**: Network of partner restaurants
  - **Location Filters**: City, country and Michelin stars
  - **Exclusive Benefits**: Advantages for club members
  - **Complete Profiles**: Chef, philosophy, signature dishes
- ✅ **Il Diario del Sommelier**: Specialized editorial blog
  - **Premium Articles**: Exclusive content for subscribers
  - **Category Search**: Winemaking, tasting, terroir
  - **Expert Authors**: Renowned sommeliers and oenologists
- ✅ **Complete Authentication**: Login, registration and profile management

## 🛠️ Technologies

- **React 19.1.0**: Main library for interactive components
- **TypeScript 5.7.2**: Static typing for code robustness
- **Vite 6.2.0**: Modern build system and fast development server
- **Tailwind CSS 4.1.8**: Utility framework for elegant styling
- **React Router DOM 7.6.1**: SPA routing with fluid navigation

### Design & UX

- **Cormorant Garamond**: Serif typography for elegant titles
- **Lato**: Clean font for body text and interface
- **Refined Palette**: Burgundy (#780027), Gold (#B08D57), Charcoal (#333333)
- **Smooth Animations**: Page transitions and entrance effects
- **Responsive Interface**: Complete adaptation for mobile devices

## 📋 Prerequisites

- Node.js 18+ or higher
- npm or yarn (package manager)
- Modern browser with ES6+ support

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tesori-di-bacco.git
cd tesori-di-bacco

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

## ⚙️ Configuration

The project uses mocked data defined in `src/constants.ts`. For customization:

1. **Brand Identity**:
   ```typescript
   export const APP_NAME = "Tesori di Bacco";
   export const APP_FULL_NAME = "Tesori di Bacco";
   export const APP_MOTTO = "L'Anima del Vino, Goccia a Goccia.";
   ```

2. **Color Configuration** (in `index.html`):
   ```css
   :root {
     --burgundy-accent: #780027;
     --gold-accent: #B08D57;
     --charcoal-gray: #333333;
   }
   ```

3. **Mocked Data**: Customize wines, restaurants and articles in `constants.ts`

## 🖥️ Running the Application

```bash
# Development
npm run dev

# Production build
npm run build

# Build preview
npm run preview

# Linting
npm run lint
```

Access `http://localhost:5173` to view the application.

## 🍾 How to Use

### Age Verification
1. When accessing for the first time, complete age verification
2. Provide CPF and accept terms of use
3. Choose between Login, Registration or navigation as guest

### Catalog Exploration
1. **La Collezione Frescobaldi**: Browse the complete catalog
2. **Smart Filters**: Use filters by region, grape, producer
3. **Wine Details**: Click on any wine for complete information

### Membership System
```
Available Plans:
├─ Tier 1: Il Principiante (R$ 179/month)
├─ Tier 2: L'Esploratore (R$ 349/month) - MOST POPULAR
├─ Tier 3: L'Intenditore (R$ 549/month)
├─ Tier 4: Il Raffinato (R$ 799/month)
├─ Tier 5: O Conoscitore Supremo (R$ 1,299/month)
└─ Tier 6: L'Elite di Bacco (By invitation)
```

### Tavole del Gusto
- Explore partner restaurants with Michelin stars
- Filter by location and member benefits
- Discover exclusive pairings

## 🧪 Project Structure

```
src/
├── components/          # Reusable components
│   ├── icons/          # Custom SVG icons
│   ├── Button.tsx      # Button with variants
│   ├── Modal.tsx       # Generic modal
│   ├── Header.tsx      # Main navigation
│   └── Footer.tsx      # Informative footer
├── pages/              # Application pages
│   ├── HomePage.tsx    # Main landing page
│   ├── AdegaEclatPage.tsx     # Wine catalog
│   ├── WineDetailPage.tsx     # Wine details
│   ├── MembershipPlansPage.tsx # Subscription plans
│   └── MembersAreaPage.tsx    # Member dashboard
├── types.ts            # TypeScript definitions
├── constants.ts        # Mocked data and constants
└── App.tsx            # Root component and routing
```

## 🎨 Design System

### Color Palette
- **Burgundy Accent** (`#780027`): Primary actions and highlights
- **Gold Accent** (`#B08D57`): Luxury elements and popularity
- **Charcoal Gray** (`#333333`): Main texts
- **Ice White** (`#F8F9FA`): Clean backgrounds

### Main Components
- **WineCard**: Elegant wine card with hover effects
- **SectionTitle**: Standardized titles with golden dividers
- **Modal**: Modal system for confirmations
- **Button**: Buttons with 4 variants (primary, secondary, outline, text)

## 📱 Responsive Features

### Desktop
- Complete horizontal navigation
- Side filters on wine pages
- Multi-column layout

### Mobile
- Responsive hamburger menu
- Filters in modal overlay
- Touch-adaptable cards
- Optimized typography for reading

## 🔐 Authentication System

### Context Provider
```typescript
const AuthContext = createContext<AuthContextType | undefined>(undefined);
```

### Features
- **Login**: Validation against mocked users
- **Registration**: New user creation (tier1 default)
- **Persistence**: LocalStorage for sessions
- **Member Area**: Personalized dashboard
- **Logout**: Complete session cleanup

## 🍽️ Gastronomic Integrations

### Partner Restaurants
- **Advanced Filters**: By Michelin stars and benefits
- **Complete Profiles**: Chef, philosophy, atmosphere
- **Served Wines**: Integration with Éclat catalog
- **Exclusive Benefits**: Advantages for each tier

### Pairing System
- Detailed suggestions by wine
- Complementary recipes
- Links to related articles

## 📚 Editorial Blog

### Il Diario del Sommelier
- **Premium Articles**: Marked exclusive content
- **Categories**: Winemaking, Tasting, Terroir, History
- **Smart Search**: By title, author, category
- **Expert Authors**: Fictional sommelier profiles

## 🚀 Build and Deploy

### Production Build
```bash
npm run build
# Generates optimized dist/ folder
```

### Suggested Deploy
- **Vercel**: Automatic deployment via Git
- **Netlify**: Static hosting with forms
- **GitHub Pages**: For open source projects

### Optimizations
- Automatic code splitting by Vite
- Lazy loading of components
- Image optimization
- Asset compression

## 🛣️ Roadmap

- [ ] **Wine Catalog Improvement**: Add ALL necessary images for the website replacing placeholders
- [ ] **Wine Catalog Improvement**: Add more wines
- [ ] **Restaurant Catalog Improvement**: Add more restaurants and related content
- [ ] **Complete Mobile Responsiveness Implementation**: Refine pages and modules for better mobile device responsiveness
- [ ] **Registration System Refinement**: Implement more form fields
- [ ] **Payment System**: Integration with Stripe/PagSeguro
- [ ] **PWA**: Transform into Progressive Web App
- [ ] **E2E Tests**: Cypress for interface testing
- [ ] **Internationalization**: Multi-language support (PT/EN/IT)
- [ ] **Analytics**: Google Analytics integration
- [ ] **SEO Optimization**: Meta tags and sitemap
- [ ] **Review System**: Wine reviews by members

## 🎯 Advanced Features

### UX Animations
- **Page Transitions**: Smooth fade in/out
- **Cascading Cards**: Staggered effect in listings
- **Hover Effects**: Interactive scales and shadows
- **Scroll Animations**: Elements appear when scrolling

### Performance
- **Lazy Loading**: On-demand loading
- **Memoization**: React.memo in heavy components
- **Virtual Scrolling**: For large lists (future)
- **Image Optimization**: WebP and lazy loading

### Accessibility
- **Keyboard Navigation**: Complete support
- **Screen Reader**: Proper labels and ARIA
- **Contrast**: WCAG guidelines compliance
- **Focus Management**: Clear visual states

## 📄 Mocked Data

### Main Structure
```typescript
// Wines (50+ items)
MOCK_WINES: Wine[]

// Producers (12 wineries)
MOCK_PRODUCERS: WineProducer[]

// Restaurants (9 establishments)
MOCK_RESTAURANTS: Restaurant[]

// Blog articles (6 articles)
MOCK_ARTICLES: Article[]

// Subscription plans (6 tiers)
MOCK_SUBSCRIPTION_TIERS: SubscriptionTier[]
```

### Relationships
- Wines ↔ Producers (direct reference)
- Wines ↔ Restaurants (ID arrays)
- Users ↔ Tiers (by tierId)
- Articles ↔ Wines (featuredWineIds)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏰 Cultural Inspiration

The project draws deep inspiration from rich Italian wine tradition, incorporating:
- **Italian Nomenclature**: Authentic and evocative names
- **Classic Aesthetics**: Design reminiscent of traditional wineries
- **Gastronomic Culture**: Pairings respecting culinary traditions
- **Artisanal Exclusivity**: Philosophy of unique and limited products

## 📞 Contact

Thiago Di Faria - [thiagodifaria@gmail.com](mailto:thiagodifaria@gmail.com)

Project link: [https://github.com/thiagodifaria/Tesori-di-Bacco](https://github.com/thiagodifaria/Tesori-di-Bacco)

**Project**: Tesori di Bacco - Front-end Demonstration  
**Technology**: React + TypeScript + Vite + Tailwind  
**Status**: Mocked data for demonstration

---

*"L'Anima del Vino, Goccia a Goccia." - The soul of wine, drop by drop.*