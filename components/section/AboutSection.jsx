'use client';
import React from 'react';
import Image from 'next/image';
import Jason from '@/public/Jason.jpg';
import useSectionInView from '@/lib/hooks/useSectionInView';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { ref } = useSectionInView('About');

  return (
    <section ref={ref} className='scroll-mt-20' id='about'>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 lg:gap-28 px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-40 z-[-10'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 2,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <div className='place-self-center'>
          <Image
            src={Jason}
            alt='profile-image'
            className='h-auto max-w-lg rounded-lg'
            width={300}
            height={300}
          />
        </div>
        <div className='place-self-center text-center md:text-left h-full text-secondary'>
          <h2 className='text-2xl md:text-4xl font-extrabold mb-4'>About Me</h2>
          <p className='text-base lg:text-lg text-pretty'>
            Welcome to my digital space! I&apos;m Jason Utama, a passionate
            Frontend Engineer based in Atlanta, GA. Back when I was in middle
            school, my teacher assigned me a project to create my own website
            using HTML and CSS. This lead me to tumble head first into the
            rabbit hole of coding and web development. Fast-forward to today,
            and I&apos;ve had the privilege of building software for Fortune 500
            companies.
            <br />
            <br />
            When I&apos;m not at the computer, I&apos;m usually will be enjoying
            a video game session with my friends, cooking, hanging out with my
            fiancée and my dog, or working out.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
