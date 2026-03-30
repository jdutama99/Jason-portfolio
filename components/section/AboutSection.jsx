'use client';
import React from 'react';
import useSectionInView from '@/lib/hooks/useSectionInView';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

const AboutSection = () => {
  const { ref } = useSectionInView('About');

  return (
    <section ref={ref} className='scroll-mt-24 mb-16 lg:mb-36' id='about'>
      <SectionHeading>About</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        <div className='text-muted leading-relaxed space-y-4'>
          <p>
            Welcome to my digital space! I&apos;m a passionate{' '}
            <span className='text-secondary'>Frontend Engineer</span> based in
            Atlanta, GA. Back when I was in middle school, my teacher assigned
            me a project to create my own website using HTML and CSS. This led
            me to tumble head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I&apos;ve had the privilege
            of building software for{' '}
            <span className='text-secondary'>Fortune 500 companies</span>.
          </p>
          <p>
            I specialize in <span className='text-secondary'>ReactJS</span> and{' '}
            <span className='text-secondary'>Next.js</span>, known for
            accelerating project timelines and optimizing user experiences
            through successful migration projects and strategic UI redesigns.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually enjoying a video
            game session with my friends, the occasional game of soccer, hanging
            out with my wife and my dog Benny, or collecting Pokémon cards.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
