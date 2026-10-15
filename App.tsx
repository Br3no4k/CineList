import AppNavigation from "./src/navigation";
import { FavoritesProvider } from "./src/contexts/FavoritesContext";

export default function App() {
  return (
    <FavoritesProvider>
      <AppNavigation />
    </FavoritesProvider>
  );
}