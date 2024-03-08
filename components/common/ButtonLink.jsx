import React from 'react';

export default function ButtonLink({ link, children }) {
  return (
    <a href={link} rel='noopener noreferrer' target='_blank'>
      <button
        type='button'
        className='w-full inline-flex items-center justify-center p-4 mb-2 me-4 rounded-lg gap-4 children-secondary border border-purple hover:bg-purple'
      >
        {children}
      </button>
    </a>
  );
}
