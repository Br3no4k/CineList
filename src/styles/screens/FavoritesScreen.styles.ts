
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

  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: spacing.lg,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
  },

  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: spacing.sm,
  },

  emptyDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },

  searchHeader: commonStyles.searchHeader,
  searchArea: commonStyles.searchArea,
  searchInput: commonStyles.searchInput,
  backButton: commonStyles.backButton,
  backButtonText: commonStyles.backButtonText,
  sectionTitle: commonStyles.sectionTitle,
  resultsList: commonStyles.resultsList,
  row: commonStyles.movieRow,
  movieItem: commonStyles.movieItem,
  list: commonStyles.movieList,
});
