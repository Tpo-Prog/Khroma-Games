
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./autenticacion.jsx";

export default function PublicOnlyRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/carrito" /> : children;
}
