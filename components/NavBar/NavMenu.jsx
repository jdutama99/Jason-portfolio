import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import navLinks from '../../lib/data/links';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const listVariants = {
    closed: {
      y: '100vh',
    },
    open: {
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className='md:hidden relative z-50'>
      <button
        className='relative z-50'
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls='mobile-navigation'
      >
        {!open ? (
          <Bars3Icon className='h-8 w-8 text-secondary' aria-hidden='true' />
        ) : (
          <XMarkIcon className='h-8 w-8 text-secondary' aria-hidden='true' />
        )}
      </button>
      {open && (
        <motion.ul
          id='mobile-navigation'
          variants={listVariants}
          initial='closed'
          animate='open'
          aria-label='Mobile navigation'
          className='fixed top-0 left-0 w-screen h-screen bg-primary/95 backdrop-blur-md text-secondary flex flex-col items-center justify-center gap-8 text-lg font-medium uppercase tracking-widest z-40'
        >
          {navLinks.map((link) => (
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={link.title}
            >
              <Link
                href={link.url}
                className='hover:text-accent transition-colors'
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.url.replace('#', '');
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                  setActiveSection(link.title);
                  setTimeOfLastClick(Date.now());
                  setOpen((prev) => !prev);
                }}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
