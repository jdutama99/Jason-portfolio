'use client';
import ContactForm from './ContactForm';
import useSectionInView from '@/lib/hooks/useSectionInView';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';

const ContactSection = () => {
  const { ref } = useSectionInView('Contact');
  return (
    <section id='contact' ref={ref} className='scroll-mt-24 mb-16 lg:mb-36'>
      <SectionHeading>Contact</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className='text-muted leading-relaxed mb-8'>
          Let&apos;s connect and explore the possibilities together! Feel free
          to reach out via the form below, or contact me directly on{' '}
          <a
            href='https://www.linkedin.com/in/jason-utama/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-accent transition-colors font-medium underline decoration-accent/40 underline-offset-4'
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href='https://discord.com/invite/DkSpGSeD'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-accent transition-colors font-medium underline decoration-accent/40 underline-offset-4'
          >
            Discord
          </a>
          .
        </p>
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default ContactSection;
