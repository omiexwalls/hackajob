'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import lightHeroSrc from '@/assets/hero1-light.jpg';
import darkHeroSrc from '@/assets/hero1-dark.jpg';
import { clsx } from 'clsx';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <Image
      className={clsx('absolute z-0 w-full h-full', {
        'opacity-55': theme === 'light',
        'opacity-100': theme === 'dark',
      })}
      src={theme === 'dark' ? darkHeroSrc : lightHeroSrc}
      layout="fill"
      objectFit="cover"
      alt={theme === 'dark' ? 'A dark hero image' : 'A light hero image'}
    />
  );
}
