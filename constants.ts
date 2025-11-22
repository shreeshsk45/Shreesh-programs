
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

// Organized by State -> Cities (Alphabetical keys and values will be handled in component)
export const INDIAN_LOCATIONS: Record<string, { name: string; lat: number; lng: number }[]> = {
  "Andhra Pradesh": [
    { name: 'Kurnool', lat: 15.8281, lng: 78.0373 },
    { name: 'Tirupati', lat: 13.6288, lng: 79.4192 },
    { name: 'Vijayawada', lat: 16.5062, lng: 80.6480 },
    { name: 'Visakhapatnam', lat: 17.6868, lng: 83.2185 },
  ],
  "Assam": [
    { name: 'Dibrugarh', lat: 27.4728, lng: 94.9120 },
    { name: 'Guwahati', lat: 26.1445, lng: 91.7362 },
    { name: 'Silchar', lat: 24.8333, lng: 92.7789 },
  ],
  "Bihar": [
    { name: 'Gaya', lat: 24.7914, lng: 85.0002 },
    { name: 'Muzaffarpur', lat: 26.1197, lng: 85.3910 },
    { name: 'Patna', lat: 25.5941, lng: 85.1376 },
  ],
  "Chandigarh": [
    { name: 'Chandigarh', lat: 30.7333, lng: 76.7794 },
  ],
  "Chhattisgarh": [
    { name: 'Bhilai', lat: 21.1938, lng: 81.3509 },
    { name: 'Bilaspur', lat: 22.0797, lng: 82.1409 },
    { name: 'Raipur', lat: 21.2514, lng: 81.6296 },
  ],
  "Delhi": [
    { name: 'New Delhi', lat: 28.6139, lng: 77.2090 },
  ],
  "Goa": [
    { name: 'Madgaon', lat: 15.2832, lng: 73.9862 },
    { name: 'Panaji', lat: 15.4909, lng: 73.8278 },
    { name: 'Vasco da Gama', lat: 15.3997, lng: 73.8325 },
  ],
  "Gujarat": [
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
    { name: 'Rajkot', lat: 22.3039, lng: 70.8022 },
    { name: 'Surat', lat: 21.1702, lng: 72.8311 },
    { name: 'Vadodara', lat: 22.3072, lng: 73.1812 },
  ],
  "Himachal Pradesh": [
    { name: 'Dharamshala', lat: 32.2190, lng: 76.3234 },
    { name: 'Kullu', lat: 31.9566, lng: 77.1095 },
    { name: 'Manali', lat: 32.2432, lng: 77.1892 },
    { name: 'Shimla', lat: 31.1048, lng: 77.1734 },
  ],
  "Jammu and Kashmir": [
    { name: 'Jammu', lat: 32.7266, lng: 74.8570 },
    { name: 'Srinagar', lat: 34.0837, lng: 74.7973 },
  ],
  "Jharkhand": [
    { name: 'Dhanbad', lat: 23.7957, lng: 86.4304 },
    { name: 'Jamshedpur', lat: 22.8046, lng: 86.2029 },
    { name: 'Ranchi', lat: 23.3441, lng: 85.3096 },
  ],
  "Karnataka": [
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Belagavi', lat: 15.8497, lng: 74.4977 },
    { name: 'Bellary', lat: 15.1394, lng: 76.9214 },
    { name: 'Davangere', lat: 14.4644, lng: 75.9218 },
    { name: 'Hassan', lat: 13.0033, lng: 76.1004 },
    { name: 'Hubli', lat: 15.3647, lng: 75.1240 },
    { name: 'Kalaburagi', lat: 17.3297, lng: 76.8343 },
    { name: 'Mangalore', lat: 12.9141, lng: 74.8560 },
    { name: 'Mysore', lat: 12.2958, lng: 76.6394 },
    { name: 'Shimoga', lat: 13.9299, lng: 75.5681 },
    { name: 'Udupi', lat: 13.3409, lng: 74.7421 },
  ],
  "Kerala": [
    { name: 'Alappuzha', lat: 9.4981, lng: 76.3388 },
    { name: 'Kochi', lat: 9.9312, lng: 76.2673 },
    { name: 'Kozhikode', lat: 11.2588, lng: 75.7804 },
    { name: 'Thiruvananthapuram', lat: 8.5241, lng: 76.9366 },
    { name: 'Thrissur', lat: 10.5276, lng: 76.2144 },
  ],
  "Madhya Pradesh": [
    { name: 'Bhopal', lat: 23.2599, lng: 77.4126 },
    { name: 'Gwalior', lat: 26.2183, lng: 78.1828 },
    { name: 'Indore', lat: 22.7196, lng: 75.8577 },
    { name: 'Jabalpur', lat: 23.1815, lng: 79.9864 },
    { name: 'Ujjain', lat: 23.1765, lng: 75.7819 },
  ],
  "Maharashtra": [
    { name: 'Aurangabad', lat: 19.8762, lng: 75.3433 },
    { name: 'Kolhapur', lat: 16.7050, lng: 74.2433 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Nagpur', lat: 21.1458, lng: 79.0882 },
    { name: 'Nashik', lat: 19.9975, lng: 73.7898 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Shirdi', lat: 19.7645, lng: 74.4762 },
    { name: 'Solapur', lat: 17.6599, lng: 75.9064 },
  ],
  "Odisha": [
    { name: 'Bhubaneswar', lat: 20.2961, lng: 85.8245 },
    { name: 'Cuttack', lat: 20.4625, lng: 85.8828 },
    { name: 'Puri', lat: 19.8135, lng: 85.8312 },
    { name: 'Rourkela', lat: 22.2604, lng: 84.8536 },
  ],
  "Punjab": [
    { name: 'Amritsar', lat: 31.6340, lng: 74.8723 },
    { name: 'Jalandhar', lat: 31.3260, lng: 75.5762 },
    { name: 'Ludhiana', lat: 30.9010, lng: 75.8573 },
  ],
  "Rajasthan": [
    { name: 'Ajmer', lat: 26.4499, lng: 74.6399 },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
    { name: 'Jaisalmer', lat: 26.9157, lng: 70.9083 },
    { name: 'Jodhpur', lat: 26.2389, lng: 73.0243 },
    { name: 'Kota', lat: 25.2138, lng: 75.8648 },
    { name: 'Udaipur', lat: 24.5854, lng: 73.7125 },
  ],
  "Tamil Nadu": [
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Coimbatore', lat: 11.0168, lng: 76.9558 },
    { name: 'Madurai', lat: 9.9252, lng: 78.1198 },
    { name: 'Salem', lat: 11.6643, lng: 78.1460 },
    { name: 'Tiruchirappalli', lat: 10.7905, lng: 78.7047 },
    { name: 'Vellore', lat: 12.9165, lng: 79.1325 },
  ],
  "Telangana": [
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Karimnagar', lat: 18.4386, lng: 79.1288 },
    { name: 'Warangal', lat: 17.9689, lng: 79.5941 },
  ],
  "Uttar Pradesh": [
    { name: 'Agra', lat: 27.1767, lng: 78.0081 },
    { name: 'Allahabad (Prayagraj)', lat: 25.4358, lng: 81.8463 },
    { name: 'Ghaziabad', lat: 28.6692, lng: 77.4538 },
    { name: 'Kanpur', lat: 26.4499, lng: 80.3319 },
    { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
    { name: 'Varanasi', lat: 25.3176, lng: 82.9739 },
  ],
  "Uttarakhand": [
    { name: 'Dehradun', lat: 30.3165, lng: 78.0322 },
    { name: 'Haridwar', lat: 29.9457, lng: 78.1642 },
    { name: 'Nainital', lat: 29.3919, lng: 79.4542 },
    { name: 'Rishikesh', lat: 30.0869, lng: 78.2676 },
  ],
  "West Bengal": [
    { name: 'Asansol', lat: 23.6739, lng: 86.9524 },
    { name: 'Darjeeling', lat: 27.0360, lng: 88.2627 },
    { name: 'Durgapur', lat: 23.5204, lng: 87.3119 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Siliguri', lat: 26.7271, lng: 88.3953 },
  ],
};

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
    quote: "Finally an app that understands Indian travel! TripSync handled my IRCTC trains and flight bookings in one go. The offline wallet saved me when network was down in Coorg.",
    author: "Karthik Gowda (ಕಾರ್ತಿಕ್ ಗೌಡ)",
    role: "Backpacker from Bangalore",
    avatar: "https://i.pravatar.cc/150?u=indian_male_1"
  },
  {
    id: 2,
    quote: "Planning a family trip to Kerala for 8 people was chaos until I used Squad Sync. Splitting the houseboat and taxi bills was seamless. Absolutely loving it!",
    author: "Priya Sharma (प्रिया शर्मा)",
    role: "Family Trip Organizer",
    avatar: "https://i.pravatar.cc/150?u=indian_female_1"
  },
  {
    id: 3,
    quote: "The local discovery feature suggested a hidden cafe in Manali that wasn't on Google Maps. TripSync feels like a smart travel buddy in my pocket.",
    author: "Rohan Mehta",
    role: "Adventure Vlogger",
    avatar: "https://i.pravatar.cc/150?u=indian_male_2"
  }
];
