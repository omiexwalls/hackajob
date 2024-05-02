'use server';

import { db } from '@/drizzle/db';
import { UserPreferences, UsersTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { clerkClient } from '@clerk/nextjs/server';

type NewUser = typeof UsersTable.$inferInsert;

export async function isUserAlreadyExists(userId: string) {
  const user = await db.query.UsersTable.findFirst({ where: eq(UsersTable.userId, userId) });
  return !!user;
}

export async function setupUser(userId: string) {
  const user = await clerkClient.users.getUser(userId);

  if (!user) {
    throw new Error('User not found');
  }

  if (await isUserAlreadyExists(userId)) {
    console.log('User already exists, skipping...');
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

export async function getUserPreferences(userId: string | null): Promise<UserPreferences> {
  if (!userId) {
    console.warn('User ID is not provided, returning default preferences...');
    return { theme: 'system' };
  }
  console.log('Getting user preferences for user ID:', userId);
  const user = await db.query.UsersTable.findFirst({ where: eq(UsersTable.userId, userId) });
  console.log('User preferences:', user?.preferences);
  return user?.preferences ?? { theme: 'system' };
}

export async function setUserPreferences(userId: string, preferences: UserPreferences) {
  console.log('Setting user preferences for user ID:', userId);
  try {
    await db.update(UsersTable).set({ preferences }).where(eq(UsersTable.userId, userId)).execute();
  } catch (error: Error | any) {
    console.error('Error setting user preferences:', error);
    throw error;
  }
}
