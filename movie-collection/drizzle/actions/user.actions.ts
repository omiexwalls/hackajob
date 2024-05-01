import { db } from '@/drizzle/db';
import { UsersTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { clerkClient } from '@clerk/nextjs/server';

type NewUser = typeof UsersTable.$inferInsert;

export async function isUserAlreadyExists(userId: string) {
  const user = await db.select().from(UsersTable).where(eq(UsersTable.userId, userId)).execute();
  return !!user;
}

export async function setupUser(userId: string) {
  const user = await clerkClient.users.getUser(userId);

  if (!user) {
    throw new Error('User not found');
  }

  if (await isUserAlreadyExists(userId)) {
    return;
  }

  await db.insert(UsersTable).values({
    userId,
    name: user.fullName,
    username: user.username,
    email: user.primaryEmailAddress?.emailAddress ?? user.emailAddresses[0].emailAddress,
    image: user.imageUrl,
  } as NewUser);
}
