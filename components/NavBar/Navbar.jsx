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
    <nav className='backdrop-blur-sm bg-primary/30  h-full flex items-center z-50 justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-5'>
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
      <Logo />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
