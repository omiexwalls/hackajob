import { useTranslations } from 'next-intl';
import Logo from '@/components/common/logo';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import LocalizationSelect from '@/components/common/select/localization.select';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <div className="w-full flex justify-between items-start h-20">
        <Logo />
        <div className="flex items-end p-4 space-x-4">
          <LocalizationSelect />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>{t('signIn')}</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
