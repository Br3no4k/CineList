import { Image, Pressable, ScrollView, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../navigation/types";
import { getMovies } from "../services/movieService";
import { styles } from "./MovieDetailsScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "MovieDetails">;

export default function MovieDetailsScreen({ navigation, route }: Props) {
  const { movieId } = route.params;
  const movie = getMovies().find((item) => item.id === movieId);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <View style={styles.info}>
          <Text style={styles.title}>Filme não encontrado</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.posterContainer}>
        <Image
          source={{ uri: movie.poster }}
          style={styles.poster}
          resizeMode="cover"
        />

        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Voltar"
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>

        <Text style={styles.metadata}>
          {movie.year} · {movie.genre} · Nota {movie.rating.toFixed(1)}
        </Text>

        <Text style={styles.sectionTitle}>Sinopse</Text>
        <Text style={styles.synopsis}>{movie.synopsis}</Text>
      </View>
    </ScrollView>
  );
}