'use client';
import Link from 'next/link';
const NavLink = ({ link }) => {
  return (
    <Link className='p-1 text-xl text-secondary' href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
