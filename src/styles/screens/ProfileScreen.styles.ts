
import { StyleSheet } from "react-native";

import { commonStyles } from "../common";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.screenContainer,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  headerTitle: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: spacing.xl,
  },

  profileCard: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: spacing.md,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  avatarText: {
    color: colors.text,
    fontSize: 36,
    fontWeight: "bold",
  },

  photoButton: {
    marginTop: spacing.sm,
    padding: spacing.xs,
  },

  photoButtonText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },

  removePhotoButton: {
    marginTop: spacing.xs,
    padding: spacing.xs,
  },

  removePhotoText: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: spacing.xs,
  },

  email: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: spacing.md,
  },

  accountBadge: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },

  accountBadgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.md,
  },

  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },

  infoItem: {
    paddingVertical: spacing.md,
    gap: spacing.xs,
  },

  infoLabel: {
    color: colors.textSecondary,
    fontSize: 13,
  },

  infoValue: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
  },

  logoutButton: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
  },

  logoutButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
  },

  footer: {
    color: colors.textSecondary,
    fontSize: 12,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
