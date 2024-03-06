'use client';
import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import Button from '../../common/Button';
import Link from 'next/link';
import LinkedIn from '@/public/linkedin.svg';
import Image from 'next/image';
import useSectionInView from '@/lib/hooks/useSectionInView';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  const { ref } = useSectionInView('Contact');
  return (
    <section
      id='contact'
      ref={ref}
      className='bg-blueBg bg-no-repeat bg-cover bg-center bg-fixed p-6 md:p-24 flex justify-center scroll-mt-20'
    >
      <div className='text-center text-secondary max-w-2xl'>
        <h1 className='text-4xl'>Contact</h1>
        <h2 className='text-base mb-10'>
          Let's connect and explore the possibilities together!
        </h2>
        <ContactForm />
        <div className='mt-10'>
          <h1 className='text-2xl'>Reach me directly</h1>
          <p className='text-base mb-6 text-balance'>
            For direct inquiries and collaborations, please feel free to call or
            email me. I'm eager to connect and discuss potential opportunities.
          </p>
          <div className='grid justify-items-center grid-cols-1 lg:grid-cols-2 mt-10'>
            <div className='col-span-1'>
              <Button>
                <EnvelopeIcon className='h-6 w-6' />
                jasonutama0206@gmail.com
              </Button>
            </div>
            <div className='col-span-1'>
              <Button>
                <Image src={LinkedIn} width={25} />
                <Link href='' className='ml-2'>
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
