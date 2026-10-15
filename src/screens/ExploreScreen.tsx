import { Text, View } from "react-native";
import { styles } from "./ExploreScreen.styles";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar</Text>
      <Text style={styles.description}>
        Em breve você poderá descobrir filmes por gênero.
      </Text>
    </View>
  );
}