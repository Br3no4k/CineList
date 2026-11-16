import { StyleSheet } from "react-native";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
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
});
