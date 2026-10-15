import { StyleSheet } from "react-native";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingBottom: spacing.xl,
  },

  posterContainer: {
    width: "100%",
    height: 430,
    position: "relative",
  },

  poster: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.surface,
  },

  info: {
    padding: spacing.lg,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md,
    marginBottom: spacing.sm,
  },

  title: {
    flex: 1,
    minWidth: 0,
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
  },

  metadata: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  synopsis: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: spacing.md,
    zIndex: 2,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  backButtonText: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 32,
  },

  favoriteButton: {
    flexShrink: 0,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  favoriteIcon: {
    color: colors.primary,
    fontSize: 30,
  },
});