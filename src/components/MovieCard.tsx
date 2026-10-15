
import { Image, Pressable, Text, View } from "react-native";
import type { Movie } from "../models/Movie";
import { styles } from "./MovieCard.styles";

type Props = {
  movie: Movie;
  onPress?: (movie: Movie) => void;
};

export default function MovieCard({ movie, onPress }: Props) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress?.(movie)}
    >
      <Image
        source={{ uri: movie.poster }}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <Text style={styles.rating}>
          Nota {movie.rating.toFixed(1)}
        </Text>

        <Text style={styles.genre} numberOfLines={1}>
          {movie.genre}
        </Text>
      </View>
    </Pressable>
  );
}
