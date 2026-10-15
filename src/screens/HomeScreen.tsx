import { FlatList, Image, ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, CompositeNavigationProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import MovieCard from "../components/MovieCard";
import {
  getFeaturedMovie,
  getMovies,
  getPopularMovies,
} from "../services/movieService";
import type { Movie } from "../models/Movie";
import type { RootStackParamList, MainTabParamList } from "../navigation/types";
import { styles } from "./HomeScreen.styles";

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, "Home">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();

  const featuredMovie = getFeaturedMovie();
  const allMovies = getMovies();
  const popularMovies = getPopularMovies();

  function handleMoviePress(movie: Movie) {
    navigation.navigate("MovieDetails", {
      movieId: movie.id,
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>CineList</Text>

          <Text style={styles.greeting}>
            Descubra seu próximo filme favorito.
          </Text>
        </View>

        <Pressable
          style={styles.featured}
          onPress={() => handleMoviePress(featuredMovie)}
        >
          <Text style={styles.featuredLabel}>
            Destaque do catálogo
          </Text>

          <Image
            source={{ uri: featuredMovie.poster }}
            style={styles.featuredPoster}
            resizeMode="cover"
          />

          <Text style={styles.featuredTitle}>
            {featuredMovie.title}
          </Text>

          <Text style={styles.featuredDescription}>
            {featuredMovie.synopsis}
          </Text>

          <Text style={styles.featuredMeta}>
            {featuredMovie.year} | Nota{" "}
            {featuredMovie.rating.toFixed(1)}
          </Text>
        </Pressable>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Filmes do catálogo
          </Text>

          <FlatList
            horizontal
            data={allMovies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                onPress={handleMoviePress}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.movieList}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Mais bem avaliados
          </Text>

          <FlatList
            horizontal
            data={popularMovies}
            keyExtractor={(item) => `popular-${item.id}`}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                onPress={handleMoviePress}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.movieList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}