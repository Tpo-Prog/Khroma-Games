import React, { useContext } from "react";
import styles from "./Productos.module.css";
import { ShoppingCart } from "lucide-react";
// import productos from "./arreglo_Productos.jsx"; // <-- eliminar
import useProducts from "./hooks/useProducts";
import { CartContext } from "./context_car.jsx";
import Header from "./header.jsx";

export default function Prod() {
  const { addToCart } = useContext(CartContext);
  const { data: products, isLoading, isError, error, createProduct, deleteProduct } = useProducts();

  if (isLoading) {
    return (
      <>
        <Header />
        <main className={styles.body}>
          <h2 className={styles.titulo}>Productos Disponibles</h2>
          <p>Cargando productos...</p>
        </main>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header />
        <main className={styles.body}>
          <h2 className={styles.titulo}>Productos Disponibles</h2>
          <p>Error: {error?.message}</p>
        </main>
      </>
    );
  }

  if (!products || products.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.body}>
          <h2 className={styles.titulo}>Productos Disponibles</h2>
          <p>No hay productos disponibles.</p>
        </main>
      </>
    );
  }
  console.log("Productos.jsx está renderizando");
  return (
    <>
      <Header />
      <main className={styles.body}>
        <h2 className={styles.titulo}>Productos Disponibles</h2>

        <div style={{ marginBottom: 12 }}>
          <button
            className={styles.navicon}
            onClick={() =>
              createProduct({
                title: "Demo Producto",
                price: 99.99,
                description: "Producto demo creado desde la app",
                image: "https://via.placeholder.com/300x200",
                category: "demo",
              })
            }
          >
            Crear producto demo
          </button>
        </div>

        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.id} className={styles.card}>
              <img src={p.imagen} alt={p.titulo} className={styles.imagen} />
              <h3>{p.titulo}</h3>
              <p className={styles.precio}>${p.precio}</p>
              <p className={styles.consola}>{p.consola}</p>
              <p className={styles.bienvenida}>{p.especificacion}</p>

              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8 }}>
                <button className={styles.navicon} onClick={() => addToCart(p)}>
                  <ShoppingCart size={14} /> Añadir al carrito
                </button>
                <button
                  className={styles.navicon}
                  style={{ background: "#a44", color: "#fff" }}
                  onClick={() => deleteProduct(p.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}