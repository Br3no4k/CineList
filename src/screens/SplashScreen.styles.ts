
import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },

  logo: {
    color: colors.primary,
    fontSize: 42,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    marginTop: spacing.sm,
    textAlign: "center",
  },

  loading: {
    marginTop: spacing.xl,
  },
});
