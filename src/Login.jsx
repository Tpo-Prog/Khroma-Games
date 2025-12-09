// src/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "./autenticacion.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
  e.preventDefault();
  try {
    await login(username, password); // si login es async
    navigate("/carrito");
  } catch (error) {
    setErrorMsg(error.message); // capturás el mensaje del throw
  }
}

  if (user) {
    return <p>Ya estás autenticado. Redirigiendo...</p>;
  }

  return (
    <main style={{ padding: "32px", textAlign: "center" }}>
      <h2>Iniciar sesión</h2>
      {errorMsg && (<p style={{ color: "red", fontWeight: "bold" }}>{errorMsg}</p>)}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </main>
  );
}
