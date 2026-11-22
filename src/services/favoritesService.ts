
import { database } from "../database/database";

export function getFavoriteIds(): string[] {
  const result = database.getAllSync<{ movie_id: string }>(
    "SELECT movie_id FROM favorites"
  );

  return result.map((item) => item.movie_id);
}

export function addFavorite(movieId: string): void {
  database.runSync(
    "INSERT OR IGNORE INTO favorites (movie_id) VALUES (?)",
    [movieId]
  );
}

export function removeFavorite(movieId: string): void {
  database.runSync(
    "DELETE FROM favorites WHERE movie_id = ?",
    [movieId]
  );
}

export function checkFavorite(movieId: string): boolean {
  const result = database.getFirstSync<{ movie_id: string }>(
    "SELECT movie_id FROM favorites WHERE movie_id = ?",
    [movieId]
  );

  return result !== null;
}
