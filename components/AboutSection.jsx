'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './Tab/TabButton';
import TabData from './Tab/TabData';
import Hero from '../public/assets/hero.svg';

const AboutSection = () => {
  return (
    <section
      className='px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-40'
      id='about'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 items-center md:gap-28 '>
        <div className='place-self-center'>
          <Image src={Hero} alt='hero-image' width={480} height={359} />
        </div>
        <div className='place-self-center text-center md:text-left h-full text-secondary'>
          <h2 className='text-2xl md:text-4xl font-extrabold mb-4'>About Me</h2>
          <p className='text-base lg:text-lg text-pretty'>
            Welcome to my digital space! I'm Jason Utama, a passionate UI
            Developer based in Atlanta, GA. With a proven track record of
            accelerating project timelines and enhancing user experiences, I
            thrive on crafting digital solutions that seamlessly blend
            innovation and functionality. Specializing in ReactJS and NextJS, I
            bring a unique blend of technical expertise and creative flair to
            every project. Explore my portfolio to discover the stories behind
            the code and the impact of my journey in the realm of UI
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
