
import {
  getFeaturedMovie,
  getMovies,
  getPopularMovies,
} from "../services/movieService";

export default function useHomeViewModel() {
  const featuredMovie = getFeaturedMovie();
  const allMovies = getMovies();
  const popularMovies = getPopularMovies();

  return {
    featuredMovie,
    allMovies,
    popularMovies,
  };
}
