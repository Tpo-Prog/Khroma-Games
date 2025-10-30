import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer>
      {/* Área azul principal */}
      <div className={styles.footermain}>
        <h1 className={styles.titulo}>Contactanos</h1>
        <p className={styles.bienvenida}>
          Telefono: +54 3624-960978 | Gmail: KhromaGames@gmail.com | 
        </p>
      </div>
    </footer>
  );
}
