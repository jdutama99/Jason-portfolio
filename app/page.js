import AboutSection from '@/components/section/AboutSection';
import ContactSection from '@/components/section/Contact/ContactSection';
import ExperienceSection from '@/components/section/ExperienceSection';
import SkillSection from '@/components/section/SkillSection';

export default function Home() {
  return (
    <>
      <h1 className='sr-only'>Jason Utama portfolio website</h1>
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
