import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function ExperienceSection() {
  return (
    <div>
      <section
        className='px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32 scroll-m-10'
        id='experience'
      >
        <h2 className='text-4xl font-extrabold mb-4 text-secondary'>
          Experience
        </h2>
        <div className='grid md:grid-cols-8 items-center md:gap-10 text-secondary md '>
          <div className='place-self-start md:mb-0 md:col-span-2'>
            <h2>11/2021 - 02/2024</h2>
          </div>
          <div className='place-self-center text-left h-full col-span-6'>
            <a
              href='https://www.tcs.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className='flex items-start text-xl cursor-pointer '>
                Software Engineer - TCS
                <ArrowUpRightIcon className='hover:animate-bounce ml-3 h-5 w-5' />
              </h2>
            </a>
            <p className='text-base lg:text-md text-pretty'>
              Developed, maintained, and shipped production code for client
              websites. Clients included Humana Ins. and Genuine Parts Company.
            </p>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
