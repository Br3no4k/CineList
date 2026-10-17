
import { useMemo, useState } from "react";

import { getMovies } from "../services/movieService";

export default function useExploreViewModel() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [searchActive, setSearchActive] = useState(false);

  const movies = getMovies();

  const genres = useMemo(
    () => [
      "Todos",
      ...Array.from(new Set(movies.map((movie) => movie.genre))),
    ],
    [movies]
  );

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesGenre =
      selectedGenre === "Todos" || movie.genre === selectedGenre;

    return matchesTitle && matchesGenre;
  });

  function closeSearch() {
    setSearchActive(false);
    setSearch("");
  }

  return {
    search,
    setSearch,
    selectedGenre,
    setSelectedGenre,
    searchActive,
    setSearchActive,
    genres,
    filteredMovies,
    closeSearch,
  };
}
