import Logo from '@/components/common/logo';
import LocalizationSelect from '@/components/common/select/localization.select';
import { ModeDropdown } from '@/components/common/dropdown/mode.dropdown';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import CustomUserButton from '@/app/[locale]/_components/preferences/custom-user-button';

export default function Toolbar({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <div className="w-full flex justify-between items-start h-20 z-10 sticky top-0">
      <Logo />
      <div className="flex items-center p-4 space-x-4">
        <LocalizationSelect />
        <ModeDropdown />
        <SignedIn>
          <CustomUserButton params={params} />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button>{t('signIn')}</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
