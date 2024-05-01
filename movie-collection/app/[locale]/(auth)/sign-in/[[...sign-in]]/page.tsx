import { SignIn } from '@clerk/nextjs';
import Logo from '@/components/common/logo';
import { useLocale } from 'next-intl';

export default function Page() {
  const locale = useLocale();

  return (
    <div className="flex flex-col justify-center">
      <Logo />
      <div className="mx-auto pt-20">
        <SignIn path={`/${locale}/sign-in`} />
      </div>
    </div>
  );
}
