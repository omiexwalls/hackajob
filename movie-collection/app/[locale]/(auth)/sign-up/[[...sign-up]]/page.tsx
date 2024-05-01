'use client';
import { SignUp } from '@clerk/nextjs';
import Logo from '@/components/common/logo';
import { useLocale } from 'next-intl';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Page() {
  const locale = useLocale();
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <div className="flex flex-col justify-center">
      <Logo />
      <div className="mx-auto pt-20">
        <SignUp
          path={`/${locale}/sign-up`}
          appearance={{
            baseTheme: isDark ? dark : undefined,
          }}
        />
      </div>
    </div>
  );
}
