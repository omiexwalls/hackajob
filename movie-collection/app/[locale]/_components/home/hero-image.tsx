'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { clsx } from 'clsx';
import darkHeroSrc from '@/assets/hero1-dark.jpg';
import lightHeroSrc from '@/assets/hero1-light.webp';

export default function HeroImage() {
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <Image
      className={clsx('absolute z-0 w-full h-full', {
        'opacity-55': !isDark,
        'opacity-100': isDark,
        'scale-y-[-1]': !isDark,
      })}
      src={isDark ? darkHeroSrc : lightHeroSrc}
      layout="fill"
      objectFit="cover"
      alt={isDark ? 'A dark hero image of a film projector' : 'A light hero image of a film strip'}
    />
  );
}
