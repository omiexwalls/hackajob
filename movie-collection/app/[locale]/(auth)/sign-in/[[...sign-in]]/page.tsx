'use client';

import { SignIn } from '@clerk/nextjs';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';

export default function Page() {
  const locale = useLocale();
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <SignIn
      path={`/${locale}/sign-in`}
      appearance={{
        baseTheme: isDark ? dark : undefined,
      }}
    />
  );
}
