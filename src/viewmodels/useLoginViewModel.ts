
import { useState } from "react";

export default function useLoginViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin() {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Preencha o e-mail e a senha.");
      return false;
    }

    if (normalizedEmail !== "b" || password !== "1") {
      setError("E-mail ou senha incorretos.");
      return false;
    }

    setError("");
    return true;
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    error,
    handleLogin,
  };
}
