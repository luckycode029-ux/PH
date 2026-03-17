import { Navbar } from '~/components/navbar';
import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Services } from '~/components/services';
import { WhyChoose } from '~/components/why-choose';
import { Projects } from '~/components/projects';
import { Gallery } from '~/components/gallery';
import { Testimonials } from '~/components/testimonials';
import { Contact } from '~/components/contact';
import { Footer } from '~/components/footer';
import { WhatsAppButton } from '~/components/whatsapp-button';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Perfect Homes - Consultant & Construction | Faridabad' },
    { name: 'description', content: 'Build, buy & design your dream home with Perfect Homes. Expert real estate consulting, construction, and interior design services in Faridabad, Haryana.' },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Projects />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
