import Image from 'next/image';
import logoSrc from '@/assets/logo.svg';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="h-32 w-fit p-4">
      <Image src={logoSrc} alt="Retruvi (Logo): Only the Classics" height="100" />
    </Link>
  );
}
