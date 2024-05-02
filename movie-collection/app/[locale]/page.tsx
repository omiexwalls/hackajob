import { useTranslations } from 'next-intl';
import Logo from '@/components/common/logo';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import LocalizationSelect from '@/components/common/select/localization.select';
import H1 from '@/components/common/typography/h1.typography';
import H3 from '@/components/common/typography/h3.typography';
import Paragraph from '@/components/common/typography/p.typography';
import { ModeDropdown } from '@/components/common/dropdown/mode.dropdown';
import Hero from '@/app/[locale]/components/home/hero';
import CustomUserButton from '@/app/[locale]/components/preferences/custom-user-button';
import Toolbar from '@/app/[locale]/components/home/toolbar';

export default function Index({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <div className="relative w-screen h-screen bg-background">
      <Toolbar params={params} />
      <div className="p-4 flex flex-col items-center z-10 sticky top-20">
        <H1>{t('Hero.header')}</H1>
        <H3>{t('Hero.subheaderLine1')}</H3>
        <Paragraph>{t('Hero.subheaderLine2')}</Paragraph>
      </div>
      <Hero />
    </div>
  );
}
