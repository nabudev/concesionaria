import {Navbar} from '@/components/Navbar';
import {Hero} from '@/components/Hero';
import { VehicleShowcase } from '@/components/Vehiculos';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import {TestimonialCarousel} from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VehicleShowcase />
      <ContactForm />
      <TestimonialCarousel />
      <Footer />
    </>
  );
}
