
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { colors } from "../theme/colors";
import { styles } from "./LoginScreen.styles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin() {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Preencha o e-mail e a senha.");
      return;
    }

    if (
      normalizedEmail !== "teste@cinelist.com" ||
      password !== "123456"
    ) {
      setError("E-mail ou senha incorretos.");
      return;
    }

    setError("");
    console.log("Login realizado com sucesso!");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>CineList</Text>

          <Text style={styles.subtitle}>
            Seus filmes favoritos em um só lugar.
            Entre para continuar.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>E-mail</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor={colors.placeholder}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Senha</Text>

            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.placeholder}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                onSubmitEditing={handleLogin}
                returnKeyType="done"
              />

              <Pressable
                style={styles.showPassword}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.showPasswordText}>
                  {showPassword ? "Ocultar" : "Mostrar"}
                </Text>
              </Pressable>
            </View>
          </View>

          {error !== "" && (
            <Text style={styles.error}>{error}</Text>
          )}

          <Pressable
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>
      
      </View>
    </KeyboardAvoidingView>
  );
}
