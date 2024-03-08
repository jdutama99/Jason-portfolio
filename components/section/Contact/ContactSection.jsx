'use client';
import ContactForm from './ContactForm';
import Discord from '@/public/Discord.svg';
import LinkedIn from '@/public/linkedin.svg';
import Image from 'next/image';
import useSectionInView from '@/lib/hooks/useSectionInView';

import { motion } from 'framer-motion';
import ButtonLink from '@/components/common/ButtonLink';

const ContactSection = () => {
  const { ref } = useSectionInView('Contact');
  return (
    <section id='contact' ref={ref} className=' scroll-mt-20'>
      <div className='bg-blueBg bg-no-repeat bg-cover bg-center bg-fixed p-6 md:p-24 flex justify-center '>
        <motion.div
          className='text-center text-secondary max-w-2xl'
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className='text-4xl'>Contact</h1>
          <h2 className='text-base mb-10'>
            Let&apos;s connect and explore the possibilities together!
          </h2>
          <ContactForm />
          <div className='mt-10'>
            <h1 className='text-2xl'>Reach me directly</h1>
            <p className='text-base mb-6 text-balance'>
              For direct inquiries and collaborations, please feel free to call
              or email me. I&apos;m eager to connect and discuss potential
              opportunities.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 md:gap-6 mb-10'>
              <div className='col-span-1'>
                <ButtonLink link='https://discord.com/invite/DkSpGSeD'>
                  <Image src={Discord} width={25} alt='LinkedIn' />
                  Discord
                </ButtonLink>
              </div>
              <div className='col-span-1'>
                <ButtonLink link='https://www.linkedin.com/in/jason-utama/'>
                  <Image src={LinkedIn} width={25} alt='LinkedIn' />
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
