
export interface WineProducer {
  id: string;
  name: string;
  region: string;
  country: string;
  story?: string;
  logoUrl?: string;
}

export interface TastingNotes {
  by: string;
  aromaticProfile: string[];
  palate: string;
  guardPotential: string;
}

export interface HarmonizationSuggestion {
  dish: string;
  reasoning: string;
  recipeLink?: string;
}

export interface RestaurantPartnership {
  restaurantName: string;
  chefName?: string;
  profile: string;
  websiteUrl?: string;
  servesThisWine?: boolean;
  memberBenefit?: string;
}

export interface Wine {
  id: string;
  name: string;
  producer: WineProducer;
  vintage: number;
  grapeVarieties: { name: string; percentage?: number }[];
  wineStyle?: 'Tinto Leve' | 'Tinto Encorpado' | 'Branco Leve' | 'Branco Encorpado' | 'Rosé' | 'Espumante' | 'Sobremesa';
  regionOfOrigin: {
    country: string;
    region: string;
    subRegion?: string;
    terroirDetails?: string;
    mapImageUrl?: string;
  };
  vinificationProcess: string;
  maturation: string;
  tastingNotes: TastingNotes;
  perceivedQuality?: { score?: string; awards?: string[] };
  harmonization: HarmonizationSuggestion[];
  restaurantPartnerships?: RestaurantPartnership[];
  story?: string;
  imageUrl: string;
  labelImageUrl?: string;
  wineColorInGlassUrl?: string;
  priceIndicator: string;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  tagline: string;
  pricePerMonth: number;
  bottleCountDescription: string;
  wineValueRange?: string;
  curationConcept: string;
  benefits: {
    general: string[];
    cellarAccess: string;
    journalAccess: string;
    gastronomyPerks?: string;
    exclusiveEvents?: string;
    personalization?: string;
    conciergeServices?: string;
  };
  representativeWines?: Pick<Wine, 'id' | 'name' | 'imageUrl'>[];
  isPopular?: boolean;
  isInviteOnly?: boolean;
  gourmetItemsIncluded?: string;
}


export interface Restaurant {
  id: string;
  name: string;
  chef?: string;
  cuisineType: string;
  city: string;
  country: string;
  michelinStars?: number;
  philosophy: string;
  imageUrl: string;
  websiteUrl?: string;
  eclatWinesServed?: Pick<Wine, 'id' | 'name'>[]; 
  memberBenefit?: string; 
  interviewLink?: string; 
  historyAndPrestige?: string;
  signatureDishes?: Array<{ name: string; description: string }>;
  culinaryHighlights?: string; 
  ambianceDescription?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
  featuredWineIds?: string[];
  featuredRestaurantIds?: string[];
  isPremium?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorLocation?: string;
  memberTier?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  tierId: string;
  address?: string;
  paymentMethod?: string;
}


export enum RoutePath {
  Home = "/",
  CollezioneFrescobaldi = "/collezione", 
  WineDetail = "/vinho/:wineId",
  MembershipPlans = "/planos",
  TavoleDelGusto = "/tavole-del-gusto", 
  RestaurantDetail = "/tavola/:restaurantId", 
  DiarioDelSommelier = "/diario-sommelier", 
  ArticleDetail = "/artigo/:articleId", 
  FAQ = "/faq",
  AboutUs = "/sobre-nos", 
  Login = "/login",
  SignUp = "/inscrever-se",
  MembersArea = "/minha-conta",
  Contact = "/contato",
  TermsAndConditions = "/termos",
  PrivacyPolicy = "/privacidade",
}