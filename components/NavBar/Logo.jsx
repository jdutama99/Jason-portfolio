import Link from 'next/link';
import { motion } from 'framer-motion';
function Logo() {
  return (
    <motion.div
      className='flex'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        href='/'
        className='text-sm bg-purple rounded-md p-1 font-semibold flex items-center justify-center'
      >
        <span className='text-secondary mr-2'>Jason</span>
        <span className='w-12 h-8 rounded bg-secondary text-primary flex items-center justify-center'>
          .dev
        </span>
      </Link>
    </motion.div>
  );
}

export default Logo;
