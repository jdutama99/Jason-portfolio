'use client';
import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import SectionHeading from '../common/SectionHeading';
import useSectionInView from '@/lib/hooks/useSectionInView';

export default function ExperienceSection() {
  const { ref } = useSectionInView('Experience');
  return (
    <section
      ref={ref}
      className=' px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-40 scroll-mt-20'
      id='experience'
    >
      <SectionHeading>Experience</SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-8 items-center md:gap-10 text-secondary md '>
        <div className='place-self-start md:mb-0 md:col-span-2'>
          <h2>11/2021 - 02/2024</h2>
        </div>
        <div className='place-self-center text-left h-full col-span-6'>
          <a
            href='https://www.tcs.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='group hover:text-purple'
          >
            <h2 className='flex items-start text-xl cursor-pointer group-hover:underline'>
              Software Engineer - TCS
              <ArrowUpRightIcon className='group-hover:animate-bounce ml-3 h-5 w-5' />
            </h2>
          </a>
          <p className='text-base lg:text-md text-pretty'>
            Developed, maintained, and shipped production code for client
            websites. Clients included Humana Ins. and Genuine Parts Company.
          </p>
        </div>
      </div>
    </section>
  );
}
