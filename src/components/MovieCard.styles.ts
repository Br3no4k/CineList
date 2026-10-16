
import { StyleSheet } from "react-native";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    maxWidth: "100%",
    marginRight: spacing.md,
  },

  poster: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },

  info: {
    marginTop: spacing.sm,
    gap: spacing.xs,
  },

  title: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },

  rating: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
  },

  genre: {
    color: colors.textSecondary,
    fontSize: 12,
  },
});
