import {Navbar} from '@/components/Navbar';
import {Hero} from '@/components/Hero';
import { VehicleShowcase } from '@/components/Vehiculos';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VehicleShowcase />
      <ContactForm />
      <Footer />
    </>
  );
}
