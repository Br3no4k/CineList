
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProfileContextData = {
  profilePhoto: string | null;
  setProfilePhoto: (photoUri: string | null) => void;
};

const ProfileContext = createContext<ProfileContextData | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

const PROFILE_PHOTO_STORAGE_KEY = "@cinelist:profilePhoto";

export function ProfileProvider({ children }: Props) {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProfilePhoto() {
      try {
        const storedPhoto = await AsyncStorage.getItem(
          PROFILE_PHOTO_STORAGE_KEY
        );

        if (storedPhoto) {
          setProfilePhoto(storedPhoto);
        }
      } catch (error) {
        console.error("Erro ao carregar foto de perfil:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProfilePhoto();
  }, []);

  useEffect(() => {
    async function saveProfilePhoto() {
      if (isLoading) return;

      try {
        if (profilePhoto) {
          await AsyncStorage.setItem(
            PROFILE_PHOTO_STORAGE_KEY,
            profilePhoto
          );
        } else {
          await AsyncStorage.removeItem(PROFILE_PHOTO_STORAGE_KEY);
        }
      } catch (error) {
        console.error("Erro ao salvar foto de perfil:", error);
      }
    }

    saveProfilePhoto();
  }, [profilePhoto, isLoading]);

  return (
    <ProfileContext.Provider
      value={{ profilePhoto, setProfilePhoto }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile deve ser usado dentro de ProfileProvider."
    );
  }

  return context;
}
