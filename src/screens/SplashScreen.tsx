
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { colors } from "../theme/colors";
import { styles } from "./SplashScreen.styles";
import type { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CineList</Text>

      <Text style={styles.subtitle}>
        Seu próximo filme começa aqui.
      </Text>

      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={styles.loading}
      />
    </View>
  );
}
