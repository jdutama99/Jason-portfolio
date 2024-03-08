'use client';
import { sendEmail } from '@/lib/actions/sendEmail';
import SubmitBtn from '@/components/common/SubmitBtn';
import toast from 'react-hot-toast';

const ContactForm = () => {
  return (
    <div className='border border-purple rounded-xl '>
      <form
        className='w-full p-8 my-4 md:px-12 mr-auto'
        action={
          async (formData) => {
            await sendEmail(formData);
            // const { error } = await sendEmail(formData);

            // if (error) {
            //   toast.error(error, {
            //     style: {
            //       borderRadius: '10px',
            //       background: '#333',
            //       color: '#fff',
            //     },
            //   });
            //   return;
          }

          // toast.success('Email sent successfully!', {
          //   style: {
          //     borderRadius: '10px',
          //     background: '#333',
          //     color: '#fff',
          //   },
          // });
        }
      >
        <div className='flex flex-col gap-4 mt-5 mb-5'>
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='email'
            max={200}
            placeholder='example@youremail.com'
            name='email'
            required
          />
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='text'
            placeholder='Subject'
            name='subject'
            max={200}
            required
          />
          <textarea
            placeholder='Message'
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            name='message'
            rows={4}
            max={2000}
            required
          />
        </div>

        <div className='flex flex-start my-2 text-secondary'>
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
