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
      <div className='grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 lg:gap-28 px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-40 '>
        <motion.div
          className='place-self-center'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            src={Jason}
            alt='profile-image'
            className='h-auto max-w-lg rounded-lg'
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          className='place-self-center text-center md:text-left h-full text-secondary'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
