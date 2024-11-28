import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.item}>
            <Link href="#" className={styles.link}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.link}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.link}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.link}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.link}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.link}></Link>
          </li>
        </ul>
      </nav>
      whayido
    </header>
  );
}
