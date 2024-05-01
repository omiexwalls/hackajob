import { SignUp } from '@clerk/nextjs';
import Logo from '@/components/common/logo';

export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <Logo />
      <div className="mx-auto pt-20">
        <SignUp path="/sign-up" />
      </div>
    </div>
  );
}
