import { Text, View } from "react-native";
import { styles } from "./ProfileScreen.styles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu perfil</Text>
      <Text style={styles.description}>
        Aqui ficarão as informações e preferências do usuário.
      </Text>
    </View>
  );
}