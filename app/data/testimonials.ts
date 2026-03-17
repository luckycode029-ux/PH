export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'Homeowner',
    content: 'Very professional and trustworthy service. Perfect Homes helped us buy our dream home in Faridabad. The team was transparent throughout the process.'
  },
  {
    id: '2',
    name: 'Priya Gupta',
    role: 'Property Investor',
    content: 'Excellent construction quality and on-time delivery. Manoj and his team exceeded our expectations with their attention to detail.'
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Client',
    content: 'The interior design work was outstanding. They understood our requirements perfectly and delivered a beautiful home within budget.'
  },
  {
    id: '4',
    name: 'Sunita Khanna',
    role: 'Homeowner',
    content: 'Highly recommend Perfect Homes for anyone looking to buy or build in Faridabad. Their local expertise is invaluable.'
  }
];
