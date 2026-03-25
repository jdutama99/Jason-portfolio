'use client';
import navLinks from '../../lib/data/links';
import Logo from './Logo';
import NavLink from './NavLink';
import NavMenu from './NavMenu';
import { useActiveSectionContext } from '@/context/active-section-context';

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className='backdrop-blur-sm bg-primary/30 h-full flex flex-col items-center py-8 z-50'>
      <Logo />
      <div className='flex flex-col gap-5 mt-8'>
        {navLinks.map((link) => (
          <div key={link.title}>
            <NavLink
              active={activeSection}
              setActive={setActiveSection}
              setTimeOfLastClick={setTimeOfLastClick}
              link={link}
            />
          </div>
        ))}
      </div>
      <div className='mt-auto'>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
