export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Property Sale',
    description: 'Expert assistance in selling your property at the best market value with complete legal support.',
    icon: 'Home'
  },
  {
    id: '2',
    title: 'Property Purchase Consulting',
    description: 'Professional guidance to find and purchase your dream property with transparent pricing.',
    icon: 'Search'
  },
  {
    id: '3',
    title: 'Construction Services',
    description: 'End-to-end construction solutions from planning to execution with quality materials.',
    icon: 'HardHat'
  },
  {
    id: '4',
    title: 'Interior Design',
    description: 'Transform your space with modern, functional interior designs tailored to your lifestyle.',
    icon: 'Sofa'
  },
  {
    id: '5',
    title: 'Renovation',
    description: 'Upgrade and modernize your existing property with expert renovation services.',
    icon: 'Paintbrush'
  },
  {
    id: '6',
    title: 'Architecture Planning',
    description: 'Comprehensive architectural planning and design for residential and commercial projects.',
    icon: 'Building2'
  }
];
