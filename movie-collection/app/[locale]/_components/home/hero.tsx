import H1 from '@/components/common/typography/h1.typography';
import H3 from '@/components/common/typography/h3.typography';
import Paragraph from '@/components/common/typography/p.typography';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import HeroImage from '@/app/[locale]/_components/home/hero-image';

export default function Hero({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return (
    <>
      <div className="p-4 flex flex-col items-center z-10 sticky top-20 space-y-3">
        <H1 className="text-center">{t('Hero.header')}</H1>
        <H3 className="opacity-65">{t('Hero.subheaderLine1')}</H3>
        <Paragraph>{t('Hero.subheaderLine2')}</Paragraph>
        <Link href={`/${params.locale}/sign-up`}>
          <Button className="w-full max-w-xs">{t('Hero.cta')}</Button>
        </Link>
      </div>
      <HeroImage />
    </>
  );
}
