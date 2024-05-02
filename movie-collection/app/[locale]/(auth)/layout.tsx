'use client';

import Logo from '@/components/common/logo';
import { useTheme } from 'next-themes';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center">
      <Logo />
      <div className="mx-auto pt-20">{children}</div>
    </div>
  );
}
