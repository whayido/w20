import styles from "./_hero.module.scss";

export default function Hero() {
  return (
    <main className={styles.content}>
      <h1 className={styles.logo}>Whayido</h1>
      <button className={styles.button}>
        <a className={styles.link} href="https://t.me/whayido" target="_blank">
          заказать проект
        </a>
      </button>
    </main>
  );
}
