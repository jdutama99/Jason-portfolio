import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/Contact/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import { HeroSection } from '@/components/HeroSection';
import TechSection from '@/components/TechSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <container className='mx-auto'>
        <HeroSection />
        <TechSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </container>
    </main>
  );
}
