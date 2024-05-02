import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ weight: ['400'], subsets: ['latin'] });

export default function Logo() {
  const locale = useLocale();

  return (
    <Link href="/" className="h-32 w-fit p-4">
      <h1 className={robotoMono.className}>movais.ai</h1>
      {/*{locale === 'en' ? <EnLogo /> : <EsLogo />}*/}
    </Link>
  );
}
