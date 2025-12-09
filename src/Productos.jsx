import React, { useContext } from "react";
import styles from "./Productos.module.css";
import { ShoppingCart } from "lucide-react";
import useProducts from "./hooks/useProducts";
import { CartContext } from "./context_car.jsx";
import Header from "./header.jsx";

export default function Prod() {
  const { addToCart } = useContext(CartContext);
  const {
    data: products,
    isLoading,
    isError,
    error,
    createProduct,
    deleteProduct,
  } = useProducts();

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

        {/* Botón para crear producto demo */}
        <div style={{ marginBottom: 12 }}>
          <button
            className={styles.navicon}
            onClick={() =>
              createProduct({
                id: Date.now(),
                titulo: "Demo Producto",
                precio: 99.99,
                especificacion: "Producto demo creado desde la app",
                imagen: "https://via.placeholder.com/300x200",
                consola: "demo",
              })
            }
          >
            Crear producto demo
          </button>
        </div>

        {/* Renderizado de productos */}
        <div className={styles.grid}>
          {products.map((p) => (
            <div key={p.id} className={styles.card}>
              <img
                src={p.image || p.imagen}
                alt={p.title || p.titulo}
                className={styles.imagen}
              />
              <h3>{p.title || p.titulo}</h3>
              <p className={styles.precio}>${p.price ?? p.precio}</p>
              <p className={styles.consola}>{p.category || p.consola}</p>
              <p className={styles.bienvenida}>
                {p.description || p.especificacion}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  marginTop: 8,
                }}
              >
                {/* Normalizamos el producto antes de guardarlo */}
                <button
                  className={styles.navicon}
                  onClick={() =>
                    addToCart({
                      id: p.id,
                      titulo: p.title || p.titulo,
                      imagen: p.image || p.imagen,
                      precio: p.price ?? p.precio,
                      especificacion: p.description || p.especificacion,
                      consola: p.category || p.consola,
                    })
                  }
                >
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
