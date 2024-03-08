'use client';
import { sendEmail } from '@/lib/actions/sendEmail';
import SubmitBtn from '@/components/common/SubmitBtn';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(formData) {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const resData = await response.json();

    if (!resData.data) {
      toast.error(resData.error.message || 'Failed to send email', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      // // If the request is successful, display success toast
      toast.success('Your email message has been sent successfully');
    }

    reset();
  }

  return (
    <div className='border border-purple rounded-xl '>
      <form
        className='w-full p-8 my-4 md:px-12 mr-auto'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col gap-4 mt-5 mb-5'>
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='email'
            max={200}
            placeholder='example@youremail.com'
            name='email'
            {...register('email')}
            required
          />
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='text'
            placeholder='Subject'
            name='subject'
            {...register('subject')}
            max={200}
            required
          />
          <textarea
            placeholder='Message'
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            name='message'
            {...register('message')}
            rows={4}
            max={2000}
            required
          />
        </div>

        <div className='flex flex-start my-2 text-secondary'>
          <SubmitBtn pending={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
