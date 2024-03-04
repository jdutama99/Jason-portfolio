'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
const NavLink = ({ active, link, setActive }) => {
  const isActive = active === link.title;
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        className={clsx(
          'relative flex w-full  justify-center p-2 text-xl  hover:text-purple transition',
          {
            'text-purple': isActive,
            'text-secondary': !isActive,
          }
        )}
        href={link.url}
        onClick={() => setActive(link.title)}
      >
        {link.title}
        {isActive && (
          <motion.span
            className='backdrop-blur-sm bg-gray-300/30 inset-0 rounded-full absolute -z-10'
            layoutId='activeSection'
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30,
            }}
          ></motion.span>
        )}
      </Link>
    </motion.div>
  );
};

export default NavLink;
