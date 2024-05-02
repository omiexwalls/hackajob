import { SignedIn, SignedOut } from '@clerk/nextjs';
import Toolbar from '@/app/[locale]/_components/home/toolbar';
import Hero from '@/app/[locale]/_components/home/hero';
import Profiles from '@/app/[locale]/_components/home/profiles';

export default function Index({ params }: { params: { locale: string } }) {
  return (
    <div className="relative w-screen h-screen bg-background">
      <Toolbar params={params} />
      <SignedOut>
        <Hero params={params} />
      </SignedOut>
      <SignedIn>
        <Profiles params={params} />
      </SignedIn>
    </div>
  );
}
