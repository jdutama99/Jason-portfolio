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
            Hey, welcome to my corner of the internet. I’m a{' '}
            <span className='text-secondary'>Frontend Engineer</span> based in{' '}
            <span className='text-secondary'>Atlanta, GA</span> and I’ve been
            building for the web for a long time now.
          </p>

          <p>
            It started back in middle school when a class project introduced me
            to <span className='text-secondary'>HTML and CSS</span> and told me
            to build something. I got hooked pretty quickly and what started as
            curiosity turned into something I kept coming back to.
          </p>

          <p>
            These days I focus on building clean, high performance web
            experiences using <span className='text-secondary'>ReactJS</span>{' '}
            and <span className='text-secondary'>Next.js</span>. I like helping
            teams move faster, cleaning up messy codebases, and shipping
            products that actually feel good to use. I’ve had the chance to do
            this at scale for{' '}
            <span className='text-secondary'>Fortune 500 companies</span>, and I
            still enjoy it just as much as when I started.
          </p>

          <p>
            Outside of work, I’m usually playing soccer, spending time with my
            family and my dog, or jumping into a game with friends. Good co op
            games and good company are hard to beat.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
