
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getFavoriteIds,
  addFavorite,
  removeFavorite,
} from "../services/favoritesService";

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
const MIGRATION_KEY = "@cinelist:favoritesMigrated";

export function FavoritesProvider({ children }: Props) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const migrationCompleted = await AsyncStorage.getItem(
          MIGRATION_KEY
        );

        if (migrationCompleted !== "true") {
          const storedFavorites = await AsyncStorage.getItem(
            FAVORITES_STORAGE_KEY
          );

          if (storedFavorites) {
            const parsedFavorites: unknown = JSON.parse(storedFavorites);

            if (
              Array.isArray(parsedFavorites) &&
              parsedFavorites.every((id) => typeof id === "string")
            ) {
              parsedFavorites.forEach((movieId: string) => {
                addFavorite(movieId);
              });
            }
          }

          await AsyncStorage.setItem(MIGRATION_KEY, "true");
          await AsyncStorage.removeItem(FAVORITES_STORAGE_KEY);
        }

        setFavoriteIds(getFavoriteIds());
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
        setFavoriteIds(getFavoriteIds());
      } finally {
        setIsLoading(false);
      }
    }

    loadFavorites();
  }, []);

  function toggleFavorite(movieId: string) {
    if (isLoading) return;

    if (favoriteIds.includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }

    setFavoriteIds(getFavoriteIds());
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
