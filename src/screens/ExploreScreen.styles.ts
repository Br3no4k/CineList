
import { StyleSheet } from "react-native";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },

  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  searchArea: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: spacing.xs,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: spacing.lg,
  },

  searchInput: {
    height: 48,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    paddingHorizontal: spacing.md,
    fontSize: 15,
    marginBottom: spacing.lg,
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  backButtonText: {
    color: colors.text,
    fontSize: 32,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.md,
  },

  genreContainer: {
    height: 60,
    marginBottom: spacing.md,
    justifyContent: "flex-start",
  },

  genreList: {
    gap: spacing.sm,
    paddingBottom: spacing.sm,
    alignItems: "flex-start",
  },

  genreButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    alignSelf: "flex-start",
    minHeight: 36,
    justifyContent: "center",
  },

  genreButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  genreText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    includeFontPadding: false,
  },

  genreTextSelected: {
    color: "#FFFFFF",
  },

  resultsList: {
    flex: 1,
  },

  movieList: {
    paddingBottom: spacing.xl,
  },

  movieRow: {
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  movieItem: {
    width: "48%",
    minWidth: 0,
  },

  emptyText: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
