'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import lightHeroSrc from '@/assets/hero1-light.jpg';
import darkHeroSrc from '@/assets/hero1-dark.jpg';
import { clsx } from 'clsx';

export default function Hero() {
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <Image
      className={clsx('absolute z-0 w-full h-full', {
        'opacity-55': !isDark,
        'opacity-100': isDark,
      })}
      src={isDark ? darkHeroSrc : lightHeroSrc}
      layout="fill"
      objectFit="cover"
      alt={isDark ? 'A dark hero image' : 'A light hero image'}
    />
  );
}
