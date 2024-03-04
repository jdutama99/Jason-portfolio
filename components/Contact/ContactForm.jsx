import Button from '../common/Button';

const ContactForm = () => {
  return (
    <div className='border border-purple rounded-xl '>
      <form className='w-full p-8 my-4 md:px-12 mr-auto'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='text'
            placeholder='Name here'
            required
          />
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='email'
            placeholder='example@youremail.com'
            required
          />
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='tel'
            placeholder='(123) 456 -7890'
            required
          />
          <input
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            type='text'
            placeholder='Company name'
            required
          />
        </div>
        <div className='my-4'>
          <textarea
            placeholder='Message'
            className='w-full rounded-lg text-gray-900 mt-2 p-3 focus:outline-purple focus:ring-0'
            rows={4}
          ></textarea>
        </div>
        <div className='flex flex-start my-2 text-secondary'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
