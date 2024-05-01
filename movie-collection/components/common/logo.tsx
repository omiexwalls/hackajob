import Image from 'next/image';
import enLogoSrc from '@/assets/logo-en.svg';
import esLogoSrc from '@/assets/logo-es.svg';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Logo() {
  const locale = useLocale();
  const logoSrc = locale === 'en' ? enLogoSrc : esLogoSrc;

  return (
    <Link href="/" className="h-32 w-fit p-4">
      <Image src={logoSrc} alt="Retruvi (Logo): Only the Classics" height="100" />
    </Link>
  );
}
