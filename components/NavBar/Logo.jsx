import Link from 'next/link';
function Logo() {
  return (
    <div className='md:hidden lg:flex'>
      <Link
        href='/'
        className='text-sm bg-purple rounded-md p-1 font-semibold flex items-center justify-center'
      >
        <span className='text-secondary mr-2'>Jason</span>
        <span className='w-12 h-8 rounded bg-secondary text-primary flex items-center justify-center'>
          .dev
        </span>
      </Link>
    </div>
  );
}

export default Logo;
