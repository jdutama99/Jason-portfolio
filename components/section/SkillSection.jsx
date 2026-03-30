'use client';
import Skills from '../../lib/data/skills';
import { motion } from 'framer-motion';

export default function SkillSection() {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.03 * index },
    }),
  };

  return (
    <section id='skill' className='mb-16 lg:mb-36 scroll-mt-24'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-secondary mb-10 sticky top-0 z-20 -mx-6 px-6 py-5 backdrop-blur-sm bg-primary/75 lg:sr-only'>
        Skills
      </h2>
      <ul className='flex flex-wrap gap-2'>
        {Skills.map((skill, index) => (
          <motion.li
            key={index}
            className='rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
