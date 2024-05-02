import { boolean, jsonb, pgEnum, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export type UserPreferences = {
  theme: 'light' | 'dark' | 'system';
};

export enum Role {
  Admin = 'admin',
  Owner = 'owner',
  User = 'user',
}

export const RolesEnum = pgEnum('roles', [Role.Admin, Role.Owner, Role.User]);

export enum Avatar {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Yellow = 'yellow',
  Orange = 'orange',
  Purple = 'purple',
  Pink = 'pink',
  Gray = 'gray',
}

export const AvatarsEnum = pgEnum('avatars', [
  Avatar.Red,
  Avatar.Blue,
  Avatar.Green,
  Avatar.Yellow,
  Avatar.Orange,
  Avatar.Purple,
  Avatar.Pink,
  Avatar.Gray,
]);

export const UsersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull().unique(),
  name: text('name').notNull(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  image: text('image').notNull(),
  preferences: jsonb('preferences').$type<UserPreferences>().default({ theme: 'system' }),
  accountId: serial('accountId'),
  role: RolesEnum('role').notNull(),
  avatar: AvatarsEnum('avatar').notNull().default(Avatar.Orange),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export enum AccountType {
  Classic = 'classic',
  Premium = 'premium',
  Pro = 'pro',
}

export const AccountTypesEnum = pgEnum('account_types', [AccountType.Classic, AccountType.Premium, AccountType.Pro]);

export const AccountsTable = pgTable('accounts', {
  id: serial('id').primaryKey(),
  type: AccountTypesEnum('type').notNull(),
  isAnnual: boolean('isAnnual').notNull().default(true),
  stripeCustomerId: text('stripeCustomerId'), // Not unique because multiple accounts can share the same customer ID
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const UsersRelations = relations(UsersTable, ({ one, many }) => ({
  account: one(AccountsTable, {
    fields: [UsersTable.accountId],
    references: [AccountsTable.id],
    relationName: 'account',
  }),
}));

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
