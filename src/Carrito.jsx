import React, { useContext } from "react";
import { CartContext } from "./context_car.jsx";
import Header from "./header.jsx";
import styles from "./Productos.module.css";

export default function Carrito() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <main className={styles.body}>
        <h2 className={styles.titulo}>Tu Carrito</h2>

        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div className={styles.grid}>
            {cart.map((p) => (
              <div key={p.id} className={styles.card}>
                <img src={p.imagen} alt={p.titulo} className={styles.imagen} />
                <h3>{p.titulo}</h3>
                <p className={styles.precio}>${p.precio}</p>
                <p className={styles.consola}>{p.consola}</p>
                <p className={styles.bienvenida}>{p.especificacion}</p>
                <p style={{ color: "#9f9daf", marginTop: "8px" }}>
                  Cantidad: {p.qty}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
