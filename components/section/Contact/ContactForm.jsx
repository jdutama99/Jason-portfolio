'use client';
import SubmitBtn from '@/components/common/SubmitBtn';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
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
          <label
            htmlFor='contact-email'
            className='text-sm font-medium text-secondary'
          >
            Email address <span aria-hidden='true'>*</span>
          </label>
          <input
            id='contact-email'
            className='w-full rounded-lg bg-card/50 text-secondary border border-dim/30 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-dim'
            type='email'
            max={200}
            placeholder='example@youremail.com'
            name='email'
            {...register('email', {
              required: 'Email address is required.',
              maxLength: {
                value: 200,
                message: 'Email must be 200 characters or fewer.',
              },
            })}
            autoComplete='email'
            aria-required='true'
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            required
          />
          {errors.email && (
            <p id='contact-email-error' className='text-sm text-secondary'>
              {errors.email.message}
            </p>
          )}

          <label
            htmlFor='contact-subject'
            className='text-sm font-medium text-secondary'
          >
            Subject <span aria-hidden='true'>*</span>
          </label>
          <input
            id='contact-subject'
            className='w-full rounded-lg bg-card/50 text-secondary border border-dim/30 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-dim'
            type='text'
            placeholder='Subject'
            name='subject'
            {...register('subject', {
              required: 'Subject is required.',
              maxLength: {
                value: 200,
                message: 'Subject must be 200 characters or fewer.',
              },
            })}
            max={200}
            autoComplete='off'
            aria-required='true'
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={
              errors.subject ? 'contact-subject-error' : undefined
            }
            required
          />
          {errors.subject && (
            <p id='contact-subject-error' className='text-sm text-secondary'>
              {errors.subject.message}
            </p>
          )}

          <label
            htmlFor='contact-message'
            className='text-sm font-medium text-secondary'
          >
            Message <span aria-hidden='true'>*</span>
          </label>
          <textarea
            id='contact-message'
            placeholder='Message'
            className='w-full rounded-lg bg-card/50 text-secondary border border-dim/30 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder:text-dim'
            name='message'
            {...register('message', {
              required: 'Message is required.',
              maxLength: {
                value: 2000,
                message: 'Message must be 2000 characters or fewer.',
              },
            })}
            rows={4}
            max={2000}
            autoComplete='off'
            aria-required='true'
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={
              errors.message ? 'contact-message-error' : undefined
            }
            required
          />
          {errors.message && (
            <p id='contact-message-error' className='text-sm text-secondary'>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className='flex mt-4'>
          <SubmitBtn pending={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
