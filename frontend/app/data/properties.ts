export interface Property {
  id: string;
  title: string;
  type: "Residential" | "Commercial" | "Villa" | "Plot" | "Penthouse";
  status: "Ready to Move" | "Under Construction" | "Upcoming";
  price: string;
  priceNumeric: number;
  area: string;
  areaNumeric: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  locality: string;
  image: string;
  featured: boolean;
  amenities: string[];
  description: string;
}

const PROPERTIES: Property[] = [
  {
    id: "kro-001",
    title: "Kronus Heritage Residences",
    type: "Residential",
    status: "Ready to Move",
    price: "₹1.2 Cr",
    priceNumeric: 12000000,
    area: "1,850 sq.ft",
    areaNumeric: 1850,
    bedrooms: 3,
    bathrooms: 3,
    location: "Sonipat, Haryana",
    locality: "Sector 12, Sonipat",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    featured: true,
    amenities: ["Swimming Pool", "Gym", "Club House", "24/7 Security", "Power Backup"],
    description: "Premium 3BHK apartments with world-class amenities and timeless design.",
  },
  {
    id: "kro-002",
    title: "Kronus Skyline Towers",
    type: "Penthouse",
    status: "Under Construction",
    price: "₹2.8 Cr",
    priceNumeric: 28000000,
    area: "3,200 sq.ft",
    areaNumeric: 3200,
    bedrooms: 4,
    bathrooms: 4,
    location: "Sonipat, Haryana",
    locality: "GT Road, Sonipat",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: true,
    amenities: ["Rooftop Lounge", "Private Elevator", "Smart Home", "Concierge", "Helipad Access"],
    description: "Ultra-luxury penthouses redefining the skyline of Sonipat with panoramic views.",
  },
  {
    id: "kro-003",
    title: "Kronus Green Valley Villas",
    type: "Villa",
    status: "Ready to Move",
    price: "₹3.5 Cr",
    priceNumeric: 35000000,
    area: "4,500 sq.ft",
    areaNumeric: 4500,
    bedrooms: 5,
    bathrooms: 5,
    location: "Sonipat, Haryana",
    locality: "Kundli, Sonipat",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: true,
    amenities: ["Private Garden", "Swimming Pool", "Home Theater", "Modular Kitchen", "Vastu Compliant"],
    description: "Sprawling villas nestled in greenery, designed for those who seek exclusivity.",
  },
  {
    id: "kro-004",
    title: "Kronus Business Hub",
    type: "Commercial",
    status: "Under Construction",
    price: "₹85 Lac",
    priceNumeric: 8500000,
    area: "1,200 sq.ft",
    areaNumeric: 1200,
    bedrooms: 0,
    bathrooms: 2,
    location: "Sonipat, Haryana",
    locality: "Rajiv Chowk, Sonipat",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: false,
    amenities: ["High-speed Elevator", "Central AC", "Ample Parking", "Food Court", "Conference Room"],
    description: "State-of-the-art commercial spaces designed for modern businesses.",
  },
  {
    id: "kro-005",
    title: "Kronus Prime Plots",
    type: "Plot",
    status: "Ready to Move",
    price: "₹45 Lac",
    priceNumeric: 4500000,
    area: "250 sq.yd",
    areaNumeric: 250,
    bedrooms: 0,
    bathrooms: 0,
    location: "Sonipat, Haryana",
    locality: "Murthal Road, Sonipat",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    featured: false,
    amenities: ["Gated Community", "Wide Roads", "Park Facing", "Water Supply", "Electricity"],
    description: "Premium residential plots in a gated community with excellent connectivity.",
  },
  {
    id: "kro-006",
    title: "Kronus Luxe Apartments",
    type: "Residential",
    status: "Upcoming",
    price: "₹95 Lac",
    priceNumeric: 9500000,
    area: "1,450 sq.ft",
    areaNumeric: 1450,
    bedrooms: 2,
    bathrooms: 2,
    location: "Sonipat, Haryana",
    locality: "Sector 7, Sonipat",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    featured: true,
    amenities: ["Landscaped Garden", "Jogging Track", "Kids Play Area", "Yoga Deck", "EV Charging"],
    description: "Thoughtfully designed 2BHK luxury apartments with modern-day amenities.",
  },
];

export default PROPERTIES;
