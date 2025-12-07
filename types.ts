export type Language = 'en' | 'hi';

export interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface ServiceData {
  id: number;
  icon: string; // Using string identifiers for Lucide icons
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    students: string;
    status: string;
    contact: string;
    cta: string;
  };
  hero: SlideData[];
  services: {
    heading: string;
    subheading: string;
    items: ServiceData[];
    readMore: string;
    showLess: string;
  };
  student: {
    heading: string;
    description: string;
    badge: string;
    features: string[];
  };
  caseStatus: {
    heading: string;
    description: string;
    placeholder: string;
    button: string;
    resultTitle: string;
  };
  testimonials: {
    heading: string;
    items: TestimonialData[];
  };
  footer: {
    about: string;
    address: string;
    links: string;
    rights: string;
  };
}