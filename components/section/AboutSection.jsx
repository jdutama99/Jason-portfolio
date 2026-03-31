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
            Hey, welcome to my corner of the internet! I&apos;m a{' '}
            <span className='text-secondary'>Frontend Engineer</span> based in{' '}
            <span className='text-secondary'>Atlanta, GA</span> — and honestly,
            I&apos;ve been building for the web since before it was cool.
          </p>
          <p>
            It all started in middle school when a class project handed me{' '}
            <span className='text-secondary'>HTML and CSS</span> and basically
            dared me to make something. I never looked back. What started as a
            curiosity quickly became an obsession, and that rabbit hole?
            I&apos;m still happily tumbling down it.
          </p>
          <p>
            These days, I channel that same energy into crafting polished,
            high-performance web experiences — working with{' '}
            <span className='text-secondary'>ReactJS</span> and{' '}
            <span className='text-secondary'>Next.js</span> to help teams ship
            faster, modernize legacy codebases, and build UIs that people
            actually enjoy using. I&apos;ve had the privilege of doing this at
            scale for{' '}
            <span className='text-secondary'>Fortune 500 companies</span>, and
            every project still gets me just as excited as that first HTML page
            did.
          </p>
          <p>
            When I step away from the screen, you&apos;ll find me lacing up for
            a soccer match, hanging out with my wife and our dog Benny, or
            getting completely locked in on a gaming session with friends. A
            good co-op game and good company? Hard to beat.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
