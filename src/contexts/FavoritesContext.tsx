
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const FAVORITES_STORAGE_KEY = "@cinelist:favoriteIds";

export function FavoritesProvider({ children }: Props) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const storedFavorites = await AsyncStorage.getItem(
          FAVORITES_STORAGE_KEY
        );

        if (storedFavorites) {
          setFavoriteIds(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFavorites();
  }, []);

  useEffect(() => {
    async function saveFavorites() {
      if (isLoading) return;

      try {
        await AsyncStorage.setItem(
          FAVORITES_STORAGE_KEY,
          JSON.stringify(favoriteIds)
        );
      } catch (error) {
        console.error("Erro ao salvar favoritos:", error);
      }
    }

    saveFavorites();
  }, [favoriteIds, isLoading]);

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
