'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Moon, Sun, SunMoon } from 'lucide-react';
import * as React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { clsx } from 'clsx';

const formSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).default('system'),
});

export default function UserPreferences({ params }: { params: { locale: string } }) {
  const { theme, setTheme } = useTheme();
  const { userId } = useAuth();

  const [alert, setAlert] = React.useState<{
    title: string;
    description: string;
    variant?: 'destructive';
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({}),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userId) {
      setAlert({
        variant: 'destructive',
        title: 'Uh oh!',
        description: 'You must be logged in to update your preferences.',
      });
      return;
    }

    const formData = new FormData();
    formData.append('theme', values.theme);

    fetch('/api/user/preferences', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setAlert({
          title: 'Success!',
          description: 'Your preferences have been updated.',
        });
        setTheme(values.theme);
      })
      .catch((error) => {
        setAlert({
          variant: 'destructive',
          title: 'Uh oh!',
          description: error.message,
        });
      });
  }

  useEffect(() => {
    fetch('/api/user/preferences', {
      method: 'GET',
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTheme(data.theme);
        form.setValue('theme', data.theme);
      });
    });
  }, []);

  return (
    <div className="p-4 flex flex-col space-y-4">
      {alert && (
        <Alert variant={alert.variant}>
          <AlertCircle size={16} />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Theme</FormLabel>
                <div className="flex space-x-2 items-center">
                  <Button
                    type="button"
                    value="light"
                    variant={field.value === 'light' ? 'default' : 'outline'}
                    onClick={() => form.setValue('theme', 'light')}
                  >
                    <Sun
                      size={16}
                      className={clsx({
                        'text-foreground': field.value !== 'light',
                      })}
                    />
                    <span className="sr-only">Light mode</span>
                  </Button>
                  <Button
                    type="button"
                    value="dark"
                    variant={field.value === 'dark' ? 'default' : 'outline'}
                    onClick={() => form.setValue('theme', 'dark')}
                  >
                    <Moon
                      size={16}
                      className={clsx({
                        'text-foreground': field.value !== 'dark',
                      })}
                    />
                    <span className="sr-only">Dark mode</span>
                  </Button>
                  <Button
                    type="button"
                    value="system"
                    variant={field.value === 'system' ? 'default' : 'outline'}
                    onClick={() => form.setValue('theme', 'system')}
                  >
                    <SunMoon
                      size={16}
                      className={clsx({
                        'text-foreground': field.value !== 'system',
                      })}
                    />
                    <span className="sr-only">System mode</span>
                  </Button>
                </div>
                <FormDescription>Choose your preferred theme</FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
