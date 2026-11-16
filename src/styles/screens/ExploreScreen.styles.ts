
import { StyleSheet } from "react-native";

import { commonStyles } from "../common";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.screenContainer,
  },

  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },

  searchHeader: commonStyles.searchHeader,
  searchArea: commonStyles.searchArea,

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

  searchInput: commonStyles.searchInput,
  backButton: commonStyles.backButton,
  backButtonText: commonStyles.backButtonText,
  sectionTitle: commonStyles.sectionTitle,

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

  resultsList: commonStyles.resultsList,

  movieList: commonStyles.movieList,

  movieRow: commonStyles.movieRow,
  movieItem: commonStyles.movieItem,

  emptyText: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
