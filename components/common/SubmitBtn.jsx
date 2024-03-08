import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='inline-flex items-center justify-center p-4 mb-2 me-4 rounded-lg children-secondary border border-purple hover:bg-purple'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>Submit</>
      )}
    </button>
  );
}
