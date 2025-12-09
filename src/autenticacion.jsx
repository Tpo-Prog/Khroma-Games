// src/context_auth.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {
  if (username === "admin" && password === "admin") {
    setUser({ name: username });
  } else {
    throw new Error("Credenciales inválidas");
  }
}

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
