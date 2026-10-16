
import { useMemo, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/movieService";
import type { Movie } from "../models/Movie";
import type {
  RootStackParamList,
  MainTabParamList,
} from "../navigation/types";
import { colors } from "../theme/colors";
import { styles } from "./ExploreScreen.styles";

type ExploreNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, "Explore">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function ExploreScreen() {
  const navigation = useNavigation<ExploreNavigationProp>();
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

  function handleMoviePress(movie: Movie) {
    Keyboard.dismiss();
    navigation.navigate("MovieDetails", { movieId: movie.id });
  }

  function closeSearch() {
    setSearchActive(false);
    setSearch("");
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <View style={styles.searchHeader}>
          {searchActive && (
            <Pressable
              onPress={closeSearch}
              style={styles.backButton}
              accessibilityLabel="Sair da pesquisa"
            >
              <Text style={styles.backButtonText}>‹</Text>
            </Pressable>
          )}

          <View style={styles.searchArea}>
            {!searchActive && (
              <>
                <Text style={styles.title}>Explorar</Text>
                <Text style={styles.subtitle}>
                  Encontre seu próximo filme favorito.
                </Text>
              </>
            )}

            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar filmes..."
              placeholderTextColor={colors.placeholder}
              value={search}
              onChangeText={setSearch}
              onFocus={() => setSearchActive(true)}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="search"
            />
          </View>
        </View>

        {!searchActive && (
          <>
            <Text style={styles.sectionTitle}>Gêneros</Text>

            <View style={styles.genreContainer}>
              <FlatList
                horizontal
                data={genres}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.genreList}
                renderItem={({ item }) => (
                  <Pressable
                    style={[
                      styles.genreButton,
                      selectedGenre === item &&
                        styles.genreButtonSelected,
                    ]}
                    onPress={() => setSelectedGenre(item)}
                  >
                    <Text
                      style={[
                        styles.genreText,
                        selectedGenre === item &&
                          styles.genreTextSelected,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            </View>
          </>
        )}

        <Text style={styles.sectionTitle}>
          Resultados ({filteredMovies.length})
        </Text>

        <FlatList
          key="explore-grid"
          style={styles.resultsList}
          data={filteredMovies}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.movieRow}
          contentContainerStyle={styles.movieList}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Nenhum filme encontrado.
            </Text>
          }
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
        />
      </View>
    </SafeAreaView>
  );
}
