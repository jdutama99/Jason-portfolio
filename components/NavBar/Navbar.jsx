'use client';
import { useState } from 'react';
import navLinks from './links';
import Logo from './Logo';
import NavLink from './NavLink';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  return (
    <nav className='backdrop-blur-sm bg-primary/30  h-full flex items-center z-50 justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-5'>
        {navLinks.map((link) => (
          <div key={link.title}>
            <NavLink
              active={activeSection}
              setActive={setActiveSection}
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
