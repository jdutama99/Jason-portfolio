import AboutSection from '@/components/section/AboutSection';
import ContactSection from '@/components/section/Contact/ContactSection';
import ExperienceSection from '@/components/section/ExperienceSection';
import { HeroSection } from '@/components/section/HeroSection';
import SkillSection from '@/components/section/SkillSection';
import TechSection from '@/components/section/TechSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <container className='mx-auto'>
        <HeroSection />
        <TechSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <ContactSection />
      </container>
    </main>
  );
}
