'use client';

import { Form, FormField } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AccountType } from '@/drizzle/schema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';

const formSchema = z.object({
  isAnnual: z.coerce.boolean().default(true),
  type: z.nativeEnum(AccountType).default(AccountType.Premium),
});

function AccountTypeCard({ type }: { type: AccountType }) {
  return <Card></Card>;
}

export function AccountTypeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({}),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="isAnnual"
          render={({ field }) => (
            <ToggleGroup type="single">
              <ToggleGroupItem value="false">Monthly</ToggleGroupItem>
              <ToggleGroupItem value="true">Yearly</ToggleGroupItem>
            </ToggleGroup>
          )}
        />

        <div className="flex space-x-4">
          <AccountTypeCard type={AccountType.Classic} />
          <AccountTypeCard type={AccountType.Premium} />
          <AccountTypeCard type={AccountType.Pro} />
        </div>
      </form>
    </Form>
  );
}
