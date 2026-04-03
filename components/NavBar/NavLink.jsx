'use client';
import Link from 'next/link';
import clsx from 'clsx';

const NavLink = ({ active, link, setActive, setTimeOfLastClick }) => {
  const isActive = active === link.title;
  return (
    <Link
      className='group flex items-center py-2'
      href={link.url}
      aria-current={isActive ? 'location' : undefined}
      onClick={(e) => {
        e.preventDefault();
        const targetId = link.url.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        setActive(link.title);
        setTimeOfLastClick(Date.now());
      }}
    >
      <span
        className={clsx(
          'mr-4 h-px transition-all duration-300',
          isActive
            ? 'w-16 bg-secondary'
            : 'w-8 bg-dim group-hover:w-16 group-hover:bg-secondary',
        )}
      />
      <span
        className={clsx(
          'text-xs font-bold uppercase tracking-widest transition-colors duration-300',
          isActive ? 'text-secondary' : 'text-dim group-hover:text-secondary',
        )}
      >
        {link.title}
      </span>
    </Link>
  );
};

export default NavLink;
