// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Prod from "./Productos.jsx";
import Login from "./Login.jsx";
import PrivateRoute from "./RutaPrivada.jsx";
import PublicOnlyRoute from "./RutaSoloPublica.jsx";
import Carrito from "./Carrito.jsx"; 

export default function App() {
  return (
    <Routes>
      {/* Rutas públicas generales */}
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Prod />} />

      {/* Rutas públicas exclusivas */}
      <Route
        path="/login"
        element={
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        }
      />

      {/* Rutas privadas */}
      <Route
        path="/carrito"
        element={
          <PrivateRoute>
            <Carrito />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
