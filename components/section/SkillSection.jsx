'use client';
import SectionHeading from '../common/SectionHeading';
import Skills from '../../lib/skills';
import { motion } from 'framer-motion';

export default function SkillSection() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id='skill'
      className='px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-40 scroll-mt-20'
    >
      <div className='text-center place-self-center'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center text-center gap-2 p-8'>
          {Skills.map((skill, index) => (
            <motion.li
              key={index}
              className='bg-transparent text-secondary border border-purple p-2 rounded-lg'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
