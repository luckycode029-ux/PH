export interface GalleryImage {
  id: string;
  url: string;
  category: 'interior' | 'exterior' | 'construction';
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=800&fit=crop',
    category: 'exterior',
    alt: 'Modern villa exterior'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop',
    category: 'interior',
    alt: 'Luxury living room'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    category: 'interior',
    alt: 'Modern kitchen design'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop',
    category: 'construction',
    alt: 'Construction progress'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop',
    category: 'interior',
    alt: 'Bedroom interior'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=600&fit=crop',
    category: 'exterior',
    alt: 'House facade'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=800&fit=crop',
    category: 'construction',
    alt: 'Building construction'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop',
    category: 'interior',
    alt: 'Dining area'
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&h=600&fit=crop',
    category: 'exterior',
    alt: 'Contemporary home'
  }
];
