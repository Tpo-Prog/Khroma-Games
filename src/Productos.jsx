import styles from './Productos.module.css';
import CardChildren from './cardchildren'; 
import { Link } from 'react-router-dom';
import { Home, Search, Gamepad2, User, ShoppingCart } from 'lucide-react';

  const productos2 = [
    {
      titulo: "Assassin's Creed",
      imagen: "/assets/assasins.jpeg",
      especificacion: "Assassin's Creed 3 Remastered",
      precio: "$12000.00",
      consola:"PS4"
    },
    {
      titulo: "Call of Duty",
      imagen: "/assets/callofduty.jpeg",
      especificacion: "Call of Duty Black Ops 6",
      precio: "$25000.00",
      consola:"PS4 Y PS5"
    },
    {
      titulo: "Far Cry",
      imagen: "/assets/farcry.jpeg",
      especificacion: "Far Cry 6 Gold Edition",
      precio: "$30000.00",
      consola:"PS4 Y PS5"
    },
    {
      titulo: "GTA V",
      imagen: "/assets/gtav.jpeg",
      especificacion: "Grand Theft Auto V",
      precio: "$20000.00",
      consola:"PS4 y PS5"
    },
    {
      titulo: "Life is Strange",
      imagen: "/assets/lifeis.jpeg",
      especificacion: "Life is Strange True Colors",
      precio: "$15000.00",
      consola:"PS4"
    },
    {
      titulo: "NBA 2K26",
      imagen: "/assets/nba2k.jpeg",
      especificacion: "NBA 2K26",
      precio: "$40000.00",
      consola:"PS4 Y PS5"
    },
    {
      titulo: "Resident Evil 8",
      imagen: "/assets/resident.jpeg",
      especificacion: "Resident Evil Village",
      precio: "$18000.00",
      consola:"PS4"
    },
    {
      titulo: "Tekken 7",
      imagen: "/assets/tekken.jpeg",
      especificacion: "Tekken 7 Definitive Edition",
      precio: "$35000.00",
      consola:"PS4"
    },
    {
      titulo: "CallofDutymw3",
      imagen: "/assets/codmd3.jpeg",
      especificacion: "Call of Duty Modern Warfare 3",
      precio: "$12000.00",
      consola:"PS5"
    },
    {
      titulo: "Dragon Ball",
      imagen: "/assets/dbsz.jpeg",
      especificacion: "Dragon Ball Sparking Zero",
      precio: "$45000.00",
      consola:"PS5"
    },
    {
      titulo: "Ghost of Tsushima",
      imagen: "/assets/got.jpeg",
      especificacion: "Ghost of Tsushima",
      precio: "$36000.00",
      consola:"PS4 Y PS5"
    },
    {
      titulo: "Minecraft",
      imagen: "/assets/mc.jpeg",
      especificacion: "Minecraft",
      precio: "$20000.00",
      consola:"PS4 Y PS5"
    },
    {
      titulo: "Mortal Kombat 1",
      imagen: "/assets/mk1.jpeg",
      especificacion: "Mortal Kombat 1 Deluxe Edition",
      precio: "$38000.00",
      consola:"PS5"
    },
    {
      titulo: "Metal Gear Solid",
      imagen: "/assets/mts.jpeg",
      especificacion: "Metal Gear Solid 3 Snake Eater",
      precio: "$55000.00",
      consola:"PS5"
    },
    {
      titulo: "The Last of Us 2",
      imagen: "/assets/tlou2.jpeg",
      especificacion: "The Last of Us Part 2 Remaster",
      precio: "$60000.00",
      consola:"PS5"
    },
  ];

export default function Prod() {
  return (
    <>
      {/* Header */}
      <header>
        <div className={styles.barrasuperior}>
          <div className={styles.leftGroup}>
            <span className={styles.icon}>☰</span>
            <Link to="/" className={styles.navicon}>
              <Home size={18} /> Inicio
            </Link>
          </div>
          <div className={styles.rightIcons}>
            <Link to="/buscar" className={styles.navicon}>
              <Search size={18} /> Buscar
            </Link>
            <Link to="/productos" className={styles.navicon}>
              <Gamepad2 size={18} /> Productos
            </Link>
            <Link to="/carrito" className={styles.navicon}>
              <ShoppingCart size={18} /> Carrito
            </Link>
            <Link to="/usuario" className={styles.navicon}>
              <User size={18} /> Usuario
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className={styles.body}>
        <h2 className={styles.titulo}>Productos Disponibles</h2>
        <div className={styles.grid}>
          {productos2.map((juego, index) => (
            <CardChildren key={index} ClassName={styles.card}>
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
        <p className={styles.aviso}>
          Al comprar con nosotros se le enviará el juego vía correo electrónico y podrá instalarlo en su consola o computadora.
        </p>
      </main>
    </>
  );
}