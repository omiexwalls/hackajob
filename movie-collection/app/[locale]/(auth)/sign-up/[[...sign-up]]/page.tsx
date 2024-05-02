'use client';

import { SignUp } from '@clerk/nextjs';
import { useLocale } from 'next-intl';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Page() {
  const locale = useLocale();
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <SignUp
      path={`/${locale}/sign-up`}
      appearance={{
        baseTheme: isDark ? dark : undefined,
      }}
    />
  );
}
