import styles from './header.module.css';
import { Search, User, ShoppingCart, Home, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      {/* Barra superior */}
      <div className={styles.barrasuperior}>
        <div className={styles.leftGroup}>
          <span className={styles.icon}>☰</span>
          <a href="#" className={styles.navicon}>
            <Home size={18} /> Inicio
          </a>
        </div>
        <div className={styles.rightIcons}>
          <a href="#" className={styles.navicon}>
            <Search size={18} /> Buscar
          </a>
          <Link className={styles.navicon} to="/productos">
            <Gamepad2 size={18} /> Productos
          </Link>
          <a href="#" className={styles.navicon}>
            <ShoppingCart size={18} /> Carrito
          </a>
          <a href="#" className={styles.navicon}>
            <User size={18} /> Usuario
          </a>
        </div>
      </div>

      {/* Área azul principal */}
      <div className={styles.Headermain}>
        <h1 className={styles.titulo}>Khroma Games</h1>
        <p className={styles.bienvenida}>
          Bienvenido a Khroma Games! La nueva era de juegos digitales te espera.<br />
          Encontrá los mejores títulos de PlayStation, ofertas imperdibles y precios totalmente diferentes a las tiendas oficiales.<br />
          Jugá fácil, jugá digital.
        </p>
      </div>
    </header>
  );
}
