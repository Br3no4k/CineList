
import * as SQLite from "expo-sqlite";

export const database = SQLite.openDatabaseSync("cinelist.db");

export function initializeDatabase() {
  database.execSync(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movie_id TEXT NOT NULL UNIQUE
    );
  `);
}
