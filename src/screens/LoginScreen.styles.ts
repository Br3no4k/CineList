
import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
  },

  header: {
    marginBottom: spacing.xl,
  },

  logo: {
    color: colors.primary,
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },

  form: {
    gap: spacing.md,
  },

  fieldContainer: {
    gap: spacing.xs,
  },

  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    backgroundColor: colors.surface,
    color: colors.text,
    paddingHorizontal: spacing.md,
    fontSize: 16,
  },

  passwordContainer: {
    justifyContent: "center",
  },

  passwordInput: {
    paddingRight: 85,
  },

  showPassword: {
    position: "absolute",
    right: spacing.md,
    paddingVertical: spacing.sm,
  },

  showPasswordText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },

  error: {
    color: colors.primary,
    fontSize: 14,
  },

  button: {
    height: 52,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
  },

  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    marginTop: spacing.xl,
    alignItems: "center",
  },

  footerText: {
    color: colors.textSecondary,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  },
});
