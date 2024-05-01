'use client';

import { UserButton } from '@clerk/nextjs';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserPreferences from '@/app/[locale]/components/preferences/user-preferences';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';

export default function CustomUserButton({ params }: { params: { locale: string } }) {
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
  const label = params.locale === 'en' ? 'Preferences' : 'Preferencias';

  return (
    <UserButton
      userProfileProps={{
        appearance: {
          baseTheme: isDark ? dark : undefined,
        },
      }}
      appearance={{
        baseTheme: isDark ? dark : undefined,
      }}
    >
      <UserButton.UserProfilePage url="/preferences" label={label} labelIcon={<Settings size={16} />}>
        <UserPreferences params={params} />
      </UserButton.UserProfilePage>
    </UserButton>
  );
}
