'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import socialLinks from '../../lib/data/socialLinks';
import Link from 'next/link';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export default function SocialLinks() {
  return (
    <nav className='flex gap-5 items-center' aria-label='Social links'>
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon];
        return (
          <Link
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-secondary transition-colors duration-200'
            aria-label={`${link.name} (opens in a new tab)`}
          >
            {IconComponent ? (
              <IconComponent className='h-5 w-5' aria-hidden='true' />
            ) : (
              <span>{link.name}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
