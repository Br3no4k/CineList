
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

import { styles } from "../styles/screens/ProfileScreen.styles";
import useProfileViewModel from "../viewmodels/useProfileViewModel";
import { useProfile } from "../contexts/ProfileContext";

export default function ProfileScreen() {
  const { logout } = useProfileViewModel();
  const { profilePhoto, setProfilePhoto } = useProfile();

  const [isSelectingPhoto, setIsSelectingPhoto] = useState(false);

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
          onPress: logout,
        },
      ]
    );
  }

  async function handleChooseFromGallery() {
    if (isSelectingPhoto) return;

    try {
      setIsSelectingPhoto(true);

      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permissão necessária",
          "Precisamos acessar sua galeria para escolher uma foto."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        setProfilePhoto(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível selecionar a imagem.");
      console.error(error);
    } finally {
      setIsSelectingPhoto(false);
    }
  }

  async function handleTakePhoto() {
    if (isSelectingPhoto) return;

    try {
      setIsSelectingPhoto(true);

      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permissão necessária",
          "Precisamos acessar sua câmera para tirar uma foto."
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        setProfilePhoto(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível tirar a foto.");
      console.error(error);
    } finally {
      setIsSelectingPhoto(false);
    }
  }

  function handlePhotoOptions() {
    Alert.alert("Foto de perfil", "Como deseja adicionar sua foto?", [
      {
        text: "Tirar foto",
        onPress: handleTakePhoto,
      },
      {
        text: "Escolher da galeria",
        onPress: handleChooseFromGallery,
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }

  function handleRemovePhoto() {
    Alert.alert(
      "Remover foto",
      "Deseja realmente remover sua foto de perfil?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => setProfilePhoto(null),
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
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {profilePhoto ? (
                <Image
                  source={{ uri: profilePhoto }}
                  style={styles.avatarImage}
                />
              ) : (
                <Text style={styles.avatarText}>C</Text>
              )}
            </View>

            <Pressable
              style={styles.photoButton}
              onPress={handlePhotoOptions}
              disabled={isSelectingPhoto}
            >
              <Text style={styles.photoButtonText}>
                {isSelectingPhoto
                  ? "Carregando..."
                  : "Alterar foto de perfil"}
              </Text>
            </Pressable>

            {profilePhoto && (
              <Pressable
                style={styles.removePhotoButton}
                onPress={handleRemovePhoto}
              >
                <Text style={styles.removePhotoText}>
                  Remover foto
                </Text>
              </Pressable>
            )}
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
