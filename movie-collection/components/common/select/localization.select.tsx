'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';

export default function LocalizationSelect() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    router.push(pathname.replace(locale, value));
  };

  return (
    <Select onValueChange={handleChange}>
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
