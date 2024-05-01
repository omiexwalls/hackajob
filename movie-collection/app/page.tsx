import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Logo from '@/components/common/logo';

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-between items-start h-20">
        <Logo />
        <div className="flex items-end p-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
