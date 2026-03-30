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
    <div className='flex gap-5 items-center'>
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon];
        return (
          <Link
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted hover:text-secondary transition-colors duration-200'
            aria-label={link.name}
          >
            {IconComponent ? (
              <IconComponent className='h-5 w-5' />
            ) : (
              <span>{link.name}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
