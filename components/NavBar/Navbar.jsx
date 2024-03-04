'use client';
import navLinks from './links';
import Logo from './Logo';
import NavLink from './NavLink';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <nav className='backdrop-blur-sm bg-primary/30  h-full flex items-center z-50 justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-5'>
        {navLinks.map((link) => (
          <div key={link.title}>
            <NavLink link={link} />
          </div>
        ))}
      </div>
      <Logo />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
