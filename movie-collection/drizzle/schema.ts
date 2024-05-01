import { jsonb, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export type UserPreferences = {
  theme: 'light' | 'dark' | 'system';
};

export const UsersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull().unique(),
  name: text('name').notNull(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  image: text('image').notNull(),
  preferences: jsonb('preferences').$type<UserPreferences>().default({ theme: 'system' }),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export type Actor = {
  name: string;
  role: string;
  playedBy: string;
  image: string;
};

export const MoviesTable = pgTable('movies', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  year: text('year').notNull(),
  genre: text('genre').notNull(),
  rating: text('rating').notNull(),
  image: text('image').notNull(),
  director: text('director').notNull(),
  synopsis: text('synopsis').notNull(),
  actors: jsonb('actors').$type<Actor[]>().default([]),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  archivedAt: timestamp('archivedAt'),
});
