
import { Text, View } from "react-native";
import { colors } from "../theme/colors";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        CineList
      </Text>

      <Text style={{ color: colors.textSecondary, marginTop: 8 }}>
        Bem-vindo à Home!
      </Text>
    </View>
  );
}
