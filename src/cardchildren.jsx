import styles from './cardchildren.module.css';

export default function CardChildren({ children }) {
  return <div className={styles.card}>{children}</div>;
}