
import { getMovies } from "../services/movieService";
import { useFavorites } from "../contexts/FavoritesContext";

export default function useMovieDetailsViewModel(movieId: string) {
  const movie = getMovies().find((item) => item.id === movieId);
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = movie ? isFavorite(movie.id) : false;

  function handleToggleFavorite() {
    if (movie) {
      toggleFavorite(movie.id);
    }
  }

  return {
    movie,
    favorite,
    handleToggleFavorite,
  };
}
