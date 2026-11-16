
import AppNavigation from "./src/navigation";
import { FavoritesProvider } from "./src/contexts/FavoritesContext";
import { ProfileProvider } from "./src/contexts/ProfileContext";

export default function App() {
  return (
    <FavoritesProvider>
      <ProfileProvider>
        <AppNavigation />
      </ProfileProvider>
    </FavoritesProvider>
  );
}
