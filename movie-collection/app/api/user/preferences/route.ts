'use server';

import { auth } from '@clerk/nextjs/server';
import { getUserPreferences, setUserPreferences } from '@/drizzle/actions/user.actions';

export async function GET(request: Request) {
  const { userId } = auth();
  if (!userId) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }
  const preferences = await getUserPreferences(userId);

  return new Response(JSON.stringify(preferences), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: Request) {
  const { userId } = auth();
  if (!userId) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  const formData = await request.formData();
  console.log('Form data:', formData);
  const theme = formData.get('theme');
  const preferences = {
    theme: theme as 'light' | 'dark' | 'system',
  };

  console.log('User preferences:', preferences);

  try {
    await setUserPreferences(userId, preferences);
  } catch (error: Error | any) {
    return new Response(error.message, {
      status: 500,
    });
  }

  return new Response('OK', {
    status: 200,
  });
}
