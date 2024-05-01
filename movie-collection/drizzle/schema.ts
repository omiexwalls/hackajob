import { jsonb, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    userId: text('userId').notNull(),
    name: text('name').notNull(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);

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
