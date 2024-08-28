import {Navbar} from '@/components/Navbar';
import {Hero} from '@/components/Hero';
import { VehicleShowcase } from '@/components/Vehiculos';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VehicleShowcase />
    </>
  );
}
