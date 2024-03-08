import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, title, desc }) => {
  return (
    <div className='group max-w-sm bg-white  hover:bg-slate-200 border border-gray-200 rounded-lg shadow'>
      <Link href='#' className='bg-black'>
        <Image
          className='rounded-t-lg'
          src={image}
          width={250}
          height={100}
          alt=''
        />
      </Link>
      <div className='px-2'>
        <Link href='#'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </Link>
        <p className='mb-3 font-normal text-xs text-gray-700 dark:text-gray-400'>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
