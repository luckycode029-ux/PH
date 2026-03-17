export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  amenities: string[];
  image: string;
  status: 'available' | 'sold' | 'under-construction';
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Contemporary Villa',
    location: 'Faridabad, Sector - 70',
    description: 'Sophisticated urban living at its finest. This stunning penthouse features sleek contemporary design, panoramic city views, and premium finishes throughout. Located in the heart of downtown with world-class amenities and concierge services.',
    amenities: ['Wine Room', 'Home Gym', 'Heated Floors', 'Gas Fireplace', 'Private Garage'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    status: 'available'
  },
  {
    id: '2',
    title: 'Modern Penthouse',
    location: 'Faridabad, Sector - 70',
    description: 'Sophisticated urban living at its finest. This stunning penthouse features sleek contemporary design, panoramic city views, and premium finishes throughout. Located in the heart of downtown with world-class amenities and concierge services.',
    amenities: ['City Views', 'Rooftop Terrace', '24/7 Concierge', 'Fitness Center', 'Private Elevator', 'Floor-to-Ceiling Windows', 'High-End Appliances', 'Smart Home'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    status: 'available'
  },
  {
    id: '3',
    title: 'Coastal Estate',
    location: 'Faridabad, Sector - 70',
    description: 'Sophisticated urban living at its finest. This stunning penthouse features sleek contemporary design, panoramic city views, and premium finishes throughout. Located in the heart of downtown with world-class amenities and concierge services.',
    amenities: ['Outdoor Pavilion', 'Summer Kitchen', 'Home Spa', 'Guest House', 'Tennis Court', 'Tropical Gardens'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    status: 'available'
  },
  {
    id: '4',
    title: 'Luxury Mansion',
    location: 'Faridabad, Sector - 70',
    description: 'An extraordinary waterfront estate featuring contemporary architecture, floor-to-ceiling windows, and breathtaking ocean views. This magnificent property offers the ultimate in luxury living and meticulously landscaped grounds.',
    amenities: ['Home Theater', 'Wine Cellar', 'Smart Home System', 'Gourmet Kitchen'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    status: 'available'
  }
];
