
import { movies } from "../data/movies";

export function getMovies() {
  return movies;
}

export function getFeaturedMovie() {
  return movies[0];
}

export function getPopularMovies() {
  return [...movies].sort((a, b) => b.rating - a.rating);
}
