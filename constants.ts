import { 
  Globe, 
  CalendarRange, 
  MapPin, 
  Wallet, 
  Users, 
  Plane, 
  Map as MapIcon, 
  Smartphone 
} from 'lucide-react';
import { Feature, PricingTier, FAQItem, Step, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    title: "Unified Booking",
    description: "Flights, hotels, and trains in one cart. No more tab switching anxiety.",
    icon: Plane
  },
  {
    title: "Smart Itinerary",
    description: "Drag-and-drop planner that auto-syncs reservations with travel times.",
    icon: CalendarRange
  },
  {
    title: "Local Discovery",
    description: "AI-curated hidden gems and local eats based on your vibe, not tourist traps.",
    icon: MapPin
  },
  {
    title: "Digital Wallet",
    description: "Store boarding passes, IDs, and split payments securely offline.",
    icon: Wallet
  },
  {
    title: "Squad Sync",
    description: "Collaborative planning and instant bill splitting for group trips.",
    icon: Users
  }
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Book Everything",
    description: "Select your flights and stays. We bundle them into a single easy checkout."
  },
  {
    id: 2,
    title: "Plan the Vibe",
    description: "Drag curated activities into your timeline. We handle the logistics."
  },
  {
    id: 3,
    title: "Go Explore",
    description: "Access tickets, maps, and money offline. Just bring your phone."
  }
];

export const PRICING_PLANS: PricingTier[] = [
  {
    name: "Wanderer",
    price: "$0",
    description: "Perfect for the solo adventurer planning their next getaway.",
    features: [
      "Unlimited unified bookings",
      "1 Active Itinerary",
      "Basic local recommendations",
      "Digital Wallet support"
    ],
    cta: "Start Free",
    isPopular: false
  },
  {
    name: "Nomad Pro",
    price: "$9",
    description: "For the frequent flyer who needs power tools.",
    features: [
      "Unlimited Itineraries",
      "Offline Docs & Maps",
      "Priority Support",
      "No booking fees",
      "AI Concierge"
    ],
    cta: "Go Pro",
    isPopular: true
  },
  {
    name: "Squad",
    price: "$20",
    description: "The ultimate toolkit for group travel coordination.",
    features: [
      "Everything in Nomad Pro",
      "Up to 5 Team Members",
      "Shared expense tracking",
      "Collaborative boards",
      "Group voting"
    ],
    cta: "Create Team",
    isPopular: false
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is TripSync really free?",
    answer: "Yes! The Wanderer plan is completely free forever. We take a small commission from hotels, so you don't pay extra fees for basic usage."
  },
  {
    question: "Is my digital ID safe?",
    answer: "Absolutely. We use bank-grade encryption and your ID data is stored locally on your device, only syncing when you authorize it."
  },
  {
    question: "Does it work without internet?",
    answer: "Pro and Squad users get full offline access to itineraries, tickets, and maps. Free users get offline access to boarding passes."
  },
  {
    question: "Can I split costs with friends?",
    answer: "Yes! Our 'Squad Sync' feature lets you track shared expenses and settle up via integrated payments instantly."
  },
  {
    question: "What if I need to cancel?",
    answer: "We aggregate cancellation policies clearly before you book. If things go wrong, our one-click refund request handles multiple providers at once."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "I used to have a spreadsheet, a notes app, and 15 tabs open. TripSync replaced all of them. The offline wallet saved me when I lost signal in Tokyo.",
    author: "Sarah Jenkins",
    role: "Digital Nomad",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 2,
    quote: "Planning a bachelor party for 8 guys is a nightmare. Squad Sync made splitting the Airbnb and Uber bills painless. No more chasing people for money.",
    author: "Marcus Chen",
    role: "Team Lead",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 3,
    quote: "The local discovery feature is actually good. It found a tiny jazz bar in New Orleans that wasn't on any of the top 10 lists. Pure vibe.",
    author: "Elena Rodriguez",
    role: "Food Blogger",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d"
  }
];