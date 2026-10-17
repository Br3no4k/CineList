
import { useState } from "react";

import { getMovies } from "../services/movieService";
import { useFavorites } from "../contexts/FavoritesContext";

export default function useFavoritesViewModel() {
  const { favoriteIds } = useFavorites();

  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const favoriteMovies = getMovies().filter((movie) =>
    favoriteIds.includes(movie.id)
  );

  const filteredMovies = favoriteMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const emptyTitle =
    favoriteMovies.length === 0
      ? "Nenhum favorito ainda"
      : "Nenhum filme encontrado";

  const emptyMessage =
    favoriteMovies.length === 0
      ? "Abra os detalhes de um filme e toque no coração para salvá-lo aqui."
      : "Tente pesquisar usando outro título.";

  function closeSearch() {
    setSearchActive(false);
    setSearch("");
  }

  return {
    search,
    setSearch,
    searchActive,
    setSearchActive,
    favoriteMovies,
    filteredMovies,
    emptyTitle,
    emptyMessage,
    closeSearch,
  };
}
