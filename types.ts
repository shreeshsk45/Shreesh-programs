export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}