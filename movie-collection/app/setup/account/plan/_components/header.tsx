'use server';

import H1 from '@/components/common/typography/h1.typography';
import { useTranslations } from 'next-intl';
import Paragraph from '@/components/common/typography/p.typography';

export async function Header({ params }: { params: { locale: string } }) {
  const t = useTranslations('Setup');

  return (
    <div className="flex flex-col space-y-4">
      <H1>{t('Account.choosePlan')}</H1>
      <Paragraph>{t('Account.chooseDescription')}</Paragraph>
    </div>
  );
}
