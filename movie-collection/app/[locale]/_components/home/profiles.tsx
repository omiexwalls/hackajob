import { useTranslations } from 'next-intl';

export default function Profiles({ params }: { params: { locale: string } }) {
  const t = useTranslations('Index');

  return <>Profiles</>;
}
