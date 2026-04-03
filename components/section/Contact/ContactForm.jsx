'use client';
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
    <div className='rounded-lg'>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <label htmlFor='contact-email' className='sr-only'>
            Email address
          </label>
          <input
            id='contact-email'
            className='w-full rounded-lg bg-card/50 text-secondary border border-dim/30 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-dim'
            type='email'
            max={200}
            placeholder='example@youremail.com'
            name='email'
            {...register('email')}
            autoComplete='email'
            required
          />
          <label htmlFor='contact-subject' className='sr-only'>
            Subject
          </label>
          <input
            id='contact-subject'
            className='w-full rounded-lg bg-card/50 text-secondary border border-dim/30 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-dim'
            type='text'
            placeholder='Subject'
            name='subject'
            {...register('subject')}
            max={200}
            autoComplete='off'
            required
          />
          <label htmlFor='contact-message' className='sr-only'>
            Message
          </label>
          <textarea
            id='contact-message'
            placeholder='Message'
            className='w-full rounded-lg bg-card/50 text-secondary border border-dim/30 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-dim'
            name='message'
            {...register('message')}
            rows={4}
            max={2000}
            autoComplete='off'
            required
          />
        </div>

        <div className='flex mt-4'>
          <SubmitBtn pending={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
