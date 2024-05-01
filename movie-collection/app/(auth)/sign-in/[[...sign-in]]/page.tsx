import { SignIn } from '@clerk/nextjs';
import logoSrc from '@/assets/logo.svg';
import Image from 'next/image';
import Logo from '@/components/common/logo';

export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <Logo />
      <div className="mx-auto pt-20">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
}
