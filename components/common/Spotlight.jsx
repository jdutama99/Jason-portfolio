'use client';
import { useEffect, useState } from 'react';
import { useThemeContext } from '@/context/theme-context';

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradient =
    theme === 'light'
      ? `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(15, 23, 42, 0.03), transparent 80%)`
      : `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`;

  return (
    <div
      className='spotlight hidden md:block'
      style={{ background: gradient }}
    />
  );
}
