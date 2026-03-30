'use client';
import navLinks from '../../lib/data/links';
import NavLink from './NavLink';
import NavMenu from './NavMenu';
import SocialLinks from './SocialLinks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <>
      {/* Mobile header */}
      <div className='md:hidden w-full bg-primary/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between z-50 sticky top-0'>
        <a href='#' className='text-secondary font-bold text-lg'>
          Jason Utama
        </a>
        <NavMenu />
      </div>

      {/* Desktop left panel */}
      <nav className='hidden md:flex h-full flex-col justify-between px-12 lg:px-16 py-20'>
        <div>
          <a href='#'>
            <h1 className='text-4xl lg:text-5xl font-bold text-secondary tracking-tight'>
              Jason Utama
            </h1>
          </a>
          <h2 className='mt-3 text-lg font-medium text-secondary tracking-tight'>
            Frontend Engineer
          </h2>
          <p className='mt-4 max-w-xs text-muted leading-relaxed'>
            I build pixel-perfect, accessible digital experiences for the web.
          </p>

          <div className='mt-16 flex flex-col gap-3'>
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                active={activeSection}
                setActive={setActiveSection}
                setTimeOfLastClick={setTimeOfLastClick}
                link={link}
              />
            ))}
          </div>
        </div>

        <div className='mt-8'>
          <SocialLinks />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
