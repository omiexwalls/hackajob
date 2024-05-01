import { setupUser } from '@/drizzle/actions/user.actions';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default async function Page() {
  const { userId, has } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  await setupUser(userId);

  return redirect('/');
}
