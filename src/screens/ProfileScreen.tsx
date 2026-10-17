
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./ProfileScreen.styles";

export default function ProfileScreen() {
  const navigation = useNavigation();

  function handleLogout() {
    Alert.alert(
      "Sair da conta",
      "Tem certeza de que deseja sair do CineList?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: () => {
            navigation.getParent()?.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }],
              })
            );
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Meu perfil</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>

          <Text style={styles.name}>Usuário CineList</Text>

          <Text style={styles.email}>teste@cinelist.com</Text>

          <View style={styles.accountBadge}>
            <Text style={styles.accountBadgeText}>
              Conta de demonstração
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Sobre o aplicativo</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Aplicativo</Text>
            <Text style={styles.infoValue}>CineList</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Versão</Text>
            <Text style={styles.infoValue}>1.0.0</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Finalidade</Text>
            <Text style={styles.infoValue}>Catálogo de filmes</Text>
          </View>
        </View>

        <Pressable
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Sair da conta</Text>
        </Pressable>

        <Text style={styles.footer}>
          CineList — Descubra seu próximo filme favorito.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
