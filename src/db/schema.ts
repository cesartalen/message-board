import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `messageboard_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", { length: 256 }),
    userName: varchar("user_name", {length: 256}),
    message: varchar("name", { length: 1024 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  }
)