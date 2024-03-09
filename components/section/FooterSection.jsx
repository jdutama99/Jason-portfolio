import Link from 'next/link';

function FooterSection() {
  return (
    <footer className='bg-primary text-secondary'>
      <div className='mx-auto w-full p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap'>
              Jason Utama
            </span>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase'>
                Navigation
              </h2>
              <ul className='font-medium'>
                <li className='mb-4'>
                  <a href='#top' className='hover:underline'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about' className='hover:underline'>
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase'>
                Say Hello
              </h2>
              <ul className='font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/jdutama99'
                    className='hover:underline'
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/jason-utama/'
                    className='hover:underline'
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='flex flex-col items-center justify-between'>
          <span className='text-sm  text-center'>&copy; 2024 Jason Utama</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
