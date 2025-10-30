import styles from './body.module.css';
import { ShoppingCart } from 'lucide-react';
import CardChildren from './cardchildren'; 

const productos = [
  {
    titulo: "Assassin's Creed",
    imagen: "/public/assets/assasins.jpeg",
    especificacion: "Assassin's Creed 3 Remastered",
    precio: "$12000.00",
    consola:"PS4"
  },
  {
    titulo: "Call of Duty",
    imagen: "/public/assets/callofduty.jpeg",
    especificacion: "Call of Duty Black Ops 6",
    precio: "$25000.00",
    consola:"PS5"
  },
  {
    titulo: "Far Cry",
    imagen: "/public/assets/farcry.jpeg",
    especificacion: "Far Cry 6 Gold Edition",
    precio: "$30000.00",
    consola:"PS5"
  },
  {
    titulo: "GTA V",
    imagen: "/public/assets/gtav.jpeg",
    especificacion: "Grand Theft Auto V",
    precio: "$20000.00",
    consola:"PS4 Y PS5"
  },
  {
    titulo: "Life is Strange",
    imagen: "/public/assets/lifeis.jpeg",
    especificacion: "Life is Strange True Colors",
    precio: "$15000.00",
    consola:"PS4"
  },
  {
    titulo: "NBA 2K26",
    imagen: "/public/assets/nba2k.jpeg",
    especificacion: "NBA 2K26",
    precio: "$40000.00",
    consola:"PS5"
  },
  {
    titulo: "Resident Evil 8",
    imagen: "/public/assets/resident.jpeg",
    especificacion: "Resident Evil Village",
    precio: "$18000.00",
    consola:"PS4"
  },
  {
    titulo: "Tekken 7",
    imagen: "/public/assets/tekken.jpeg",
    especificacion: "Tekken 7 Definitive Edition",
    precio: "$35000.00",
    consola:"PS4"
  }
];

export default function Body() {
  return (
    <main className={styles.body}>
      <h2 className={styles.titulo}>Destacados</h2>
      <div className={styles.grid}>
        {productos.map((juego, index) => (
          <CardChildren key={index}>
            <img src={juego.imagen} alt={juego.especificacion} className={styles.imagen} />
            <h3>{juego.titulo}</h3>
            <p className={styles.precio}>{juego.precio}</p>
            <p className={styles.consolas}>{juego.consola}</p>
            <a href="#" className={styles.navicon}>
              <ShoppingCart size={18} /> Añadir al Carrito
            </a>
          </CardChildren>
        ))}
      </div>
    </main>
  );
}
