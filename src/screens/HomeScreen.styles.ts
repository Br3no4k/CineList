
import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },

  header: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },

  logo: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "bold",
  },

  greeting: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: spacing.xs,
  },

  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },

  featured: {
    marginHorizontal: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 14,
    marginBottom: spacing.xl,
  },

  featuredLabel: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: spacing.sm,
  },

  featuredTitle: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  featuredDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: spacing.md,
  },

  featuredMeta: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },

  featuredPoster: {
    width: "100%",
    height: 240,
    borderRadius: 10,
    marginBottom: spacing.md,
    backgroundColor: colors.surfaceElevated,
  },

  movieList: {
    paddingHorizontal: spacing.lg,
  },
});
