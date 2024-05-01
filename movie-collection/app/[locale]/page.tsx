import { useTranslations } from 'next-intl';
import Logo from '@/components/common/logo';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import LocalizationSelect from '@/components/common/select/localization.select';
import H1 from '@/components/common/typography/h1.typography';
import H3 from '@/components/common/typography/h3.typography';
import Paragraph from '@/components/common/typography/p.typography';
import { ModeDropdown } from '@/components/common/dropdown/mode.dropdown';
import Hero from '@/app/[locale]/hero';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div className="relative w-screen h-screen bg-background">
      <div className="w-full flex justify-between items-start h-20 z-10 sticky top-0">
        <Logo />
        <div className="flex items-end p-4 space-x-4">
          <LocalizationSelect />
          <ModeDropdown />
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
      <div className="p-4 flex flex-col items-center z-10 sticky top-20">
        <H1>{t('Hero.header')}</H1>
        <H3>{t('Hero.subheaderLine1')}</H3>
        <Paragraph>{t('Hero.subheaderLine2')}</Paragraph>
      </div>
      <Hero />
    </div>
  );
}
