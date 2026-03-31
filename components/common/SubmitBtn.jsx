import React from 'react';
// import { useFormStatus } from 'react-dom';

export default function SubmitBtn({ pending }) {
  // const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-black bg-accent hover:bg-deep transition-colors'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-black'></div>
      ) : (
        <>Submit</>
      )}
    </button>
  );
}
