import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import navLinks from '../../lib/data/links';
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function NavMenu() {
  const [open, setOpen] = useState(false);

  const listVariants = {
    closed: {
      x: '100vw',
    },
    open: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className='md:hidden'>
      <button
        className='relative mr-4 z-50'
        onClick={() => setOpen((prev) => !prev)}
      >
        {!open ? (
          <Bars3Icon className='h-10 w-10 text-secondary' />
        ) : (
          <XMarkIcon className='h-10 w-10 text-secondary' />
        )}
      </button>
      {open && (
        <motion.ul
          variants={listVariants}
          initial='closed'
          animate='open'
          className='absolute top-0 left-0 w-screen h-screen bg-darkBlue text-secondary flex flex-col items-center justify-center gap-8 text-2xl z-100'
        >
          {navLinks.map((link) => (
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={link.title}
            >
              <Link href={link.url} onClick={() => setOpen((prev) => !prev)}>
                {link.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
