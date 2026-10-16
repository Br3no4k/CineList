
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/movieService";
import { useFavorites } from "../contexts/FavoritesContext";
import type { Movie } from "../models/Movie";
import type {
  RootStackParamList,
  MainTabParamList,
} from "../navigation/types";
import { styles } from "./FavoritesScreen.styles";

type FavoritesNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, "Favorites">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function FavoritesScreen() {
  const navigation = useNavigation<FavoritesNavigationProp>();
  const { favoriteIds } = useFavorites();

  const favoriteMovies = getMovies().filter((movie) =>
    favoriteIds.includes(movie.id)
  );

  function handleMoviePress(movie: Movie) {
    navigation.navigate("MovieDetails", { movieId: movie.id });
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <Text style={styles.title}>Meus favoritos</Text>

        {favoriteMovies.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              Nenhum favorito ainda
            </Text>

            <Text style={styles.emptyDescription}>
              Abra os detalhes de um filme e toque no coração para salvá-lo aqui.
            </Text>
          </View>
        ) : (
          <FlatList
            key="favorites-grid"
            data={favoriteMovies}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.movieItem}>
                <MovieCard
                  movie={item}
                  onPress={handleMoviePress}
                  containerStyle={{
                    width: "100%",
                    marginRight: 0,
                  }}
                />
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            columnWrapperStyle={styles.row}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
