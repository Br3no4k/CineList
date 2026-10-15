import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FavoritesContextData = {
  favoriteIds: string[];
  toggleFavorite: (movieId: string) => void;
  isFavorite: (movieId: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextData | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export function FavoritesProvider({ children }: Props) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function toggleFavorite(movieId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(movieId)
        ? currentIds.filter((id) => id !== movieId)
        : [...currentIds, movieId]
    );
  }

  function isFavorite(movieId: string) {
    return favoriteIds.includes(movieId);
  }

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites deve ser usado dentro de FavoritesProvider."
    );
  }

  return context;
}