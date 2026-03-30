function FooterSection() {
  return (
    <footer className='text-muted pb-16 pt-8'>
      <p className='text-sm leading-relaxed max-w-md'>
        Coded in{' '}
        <a
          href='https://code.visualstudio.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary hover:text-accent transition-colors font-medium'
        >
          Visual Studio Code
        </a>
        . Built with{' '}
        <a
          href='https://nextjs.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary hover:text-accent transition-colors font-medium'
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary hover:text-accent transition-colors font-medium'
        >
          Tailwind CSS
        </a>
        . All text set in the{' '}
        <a
          href='https://rsms.me/inter/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary hover:text-accent transition-colors font-medium'
        >
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  );
}

export default FooterSection;
