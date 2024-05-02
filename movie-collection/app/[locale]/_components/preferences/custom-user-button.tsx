'use client';

import { UserButton } from '@clerk/nextjs';
import { Settings } from 'lucide-react';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';
import UserPreferences from '@/app/[locale]/_components/preferences/user-preferences';

export default function CustomUserButton({ params }: { params: { locale: string } }) {
  const { theme, systemTheme } = useTheme();

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  // Workaround due to the lack of support for dynamic translations in the Clerk UI's UserButton component.
  const label = params.locale === 'en' ? 'Preferences' : 'Preferencias';

  return (
    <UserButton
      // Workaround due to the lack of support for dynamic themes in the Clerk UI.
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
