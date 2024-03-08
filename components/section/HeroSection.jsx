'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import Hero from '@/public/assets/hero.svg';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { TypeAnimation } from 'react-type-animation';
import useSectionInView from '@/lib/hooks/useSectionInView';

import Link from 'next/link';

export const HeroSection = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section ref={ref} id='home' className='scroll-mt-50'>
      <div className='lg:h-max bg-hero bg-no-repeat bg-cover bg-center bg-fixed grid grid-cols-1 md:grid-cols-12  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-14 lg:py-28 gap-6 '>
        <div className='md:col-span-7 text-center md:text-left place-self-center'>
          <h1 className='mb-4 text-4xl  md:text-5xl lg:text-6xl xl:text-7xl leading-10'>
            <span className='text-secondary'>
              Elevating User Experiences
              <br /> with{' '}
            </span>
            <TypeAnimation
              className='text-purple'
              sequence={[
                'Precision',
                1000,
                'Creativity',
                1000,
                'Elegance',
                1000,
              ]}
              wrapper='span'
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className='text-base text-secondary text-balance leading-6'>
            Results-driven UI Developer specializing in ReactJS and NextJS,
            known for accelerating project timelines and optimizing user
            experiences through successful migration projects and strategic UI
            redesigns.
          </p>
          <div className='flex flex-col lg:flex-row mt-10 mx-10 px-10 md:px-0 md:mx-0 text-secondary'>
            <a href='#contact'>
              <Button>Get in touch</Button>
            </a>

            <Link
              href={'/JasonUtamaResume2024.pdf'}
              target='_blank'
              rel='noopener noreferrer'
              download
              locale={false}
              className='flex flex-row gap-3'
            >
              <Button>
                <span>Download Resume</span>
                <DocumentArrowDownIcon className='h-6 w-6' />
              </Button>
            </Link>
          </div>
        </div>
        <div className='md:col-span-5 place-self-center  mt-10 lg:mt-0 '>
          <Image src={Hero} alt='hero-image' width={480} height={359} />
        </div>
      </div>
    </section>
  );
};
