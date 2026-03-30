'use client';
import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import SectionHeading from '../common/SectionHeading';
import useSectionInView from '@/lib/hooks/useSectionInView';
import experiences from '@/lib/data/experiences';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const { ref } = useSectionInView('Experience');
  return (
    <section ref={ref} className='scroll-mt-24 mb-16 lg:mb-36' id='experience'>
      <SectionHeading>Experience</SectionHeading>

      <div>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 * index, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <a
              href={experience.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group'
            >
              <div className='experience-card grid grid-cols-8 gap-4 mb-4'>
                <div className='col-span-8 sm:col-span-2'>
                  <p className='text-xs font-semibold uppercase tracking-wide text-dim mt-1'>
                    {experience.time}
                  </p>
                </div>
                <div className='col-span-8 sm:col-span-6'>
                  <h3 className='font-medium text-secondary leading-snug group-hover:text-accent transition-colors'>
                    {experience.title} · {experience.company}
                    <ArrowUpRightIcon className='inline-block ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
                  </h3>
                  <p className='mt-2 text-sm text-muted leading-relaxed'>
                    {experience.desc}
                  </p>
                  <ul className='mt-3 flex flex-wrap gap-2'>
                    {experience.skill.map((s, i) => (
                      <li
                        key={i}
                        className='rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent'
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <div className='mt-8'>
        <a
          href='/api/resume'
          target='_blank'
          rel='noopener noreferrer'
          className='group inline-flex items-center font-semibold text-secondary hover:text-accent transition-colors'
        >
          <span className='relative'>
            View Full Résumé
            <span className='absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full' />
          </span>
          <ArrowUpRightIcon className='ml-1 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
        </a>
      </div>
    </section>
  );
}
