'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';

export default function LocalizationSelect() {
  const locale = useLocale();
  const pathname = usePathname();

  function switchLocale(value: string) {
    const newPath = `/${value}${pathname}`;
    window.history.replaceState(null, '', newPath);
  }

  return (
    <Select onValueChange={switchLocale}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center">
          <Languages size={16} className="mr-2" />
          <SelectValue placeholder={locale === 'es' ? 'Español' : 'English'} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="es">Español</SelectItem>
      </SelectContent>
    </Select>
  );
}
