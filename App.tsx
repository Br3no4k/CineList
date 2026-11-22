
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import AppNavigation from "./src/navigation";
import { FavoritesProvider } from "./src/contexts/FavoritesContext";
import { ProfileProvider } from "./src/contexts/ProfileContext";
import { initializeDatabase } from "./src/database/database";

export default function App() {
  const [databaseReady, setDatabaseReady] = useState(false);

  useEffect(() => {
    try {
      initializeDatabase();
      setDatabaseReady(true);
    } catch (error) {
      console.error("Erro ao inicializar banco de dados:", error);
    }
  }, []);

  if (!databaseReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FavoritesProvider>
      <ProfileProvider>
        <AppNavigation />
      </ProfileProvider>
    </FavoritesProvider>
  );
}
