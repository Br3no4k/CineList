
import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import MovieCard from "../components/MovieCard";
import ScreenHeader from "../components/ScreenHeader";
import EmptyState from "../components/EmptyState";
import useFavoritesViewModel from "../viewmodels/useFavoritesViewModel";
import type { Movie } from "../models/Movie";
import type {
  RootStackParamList,
  MainTabParamList,
} from "../navigation/types";
import { colors } from "../theme/colors";
import { styles } from "./FavoritesScreen.styles";

type FavoritesNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, "Favorites">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function FavoritesScreen() {
  const navigation = useNavigation<FavoritesNavigationProp>();

  const {
    search,
    setSearch,
    searchActive,
    setSearchActive,
    filteredMovies,
    emptyTitle,
    emptyMessage,
    closeSearch,
  } = useFavoritesViewModel();

  function handleMoviePress(movie: Movie) {
    Keyboard.dismiss();
    navigation.navigate("MovieDetails", { movieId: movie.id });
  }

  function handleCloseSearch() {
    closeSearch();
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <View style={styles.searchHeader}>
          {searchActive && (
            <Pressable
              onPress={handleCloseSearch}
              style={styles.backButton}
              accessibilityLabel="Sair da pesquisa"
            >
              <Text style={styles.backButtonText}>‹</Text>
            </Pressable>
          )}

          <View style={styles.searchArea}>
            {!searchActive && (
              <ScreenHeader
                title="Meus favoritos"
                subtitle="Seus filmes salvos para assistir depois."
              />
            )}

            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar favoritos..."
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

        <Text style={styles.sectionTitle}>
          Resultados ({filteredMovies.length})
        </Text>

        <FlatList
          key="favorites-grid"
          style={styles.resultsList}
          data={filteredMovies}
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
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.row}
          ListEmptyComponent={
            <EmptyState
              title={emptyTitle}
              message={emptyMessage}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}
