import {Navbar} from '@/components/Navbar';
import {Hero} from '@/components/Hero';
import { VehicleShowcase } from '@/components/Vehiculos';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VehicleShowcase />
      <ContactForm />
    </>
  );
}
