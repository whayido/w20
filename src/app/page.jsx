import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.logo}>Whayido</h1>
      <button className={styles.button}>
        <a className={styles.link} href="https://t.me/whayido" target="_blank">
          заказать проект
        </a>
      </button>
    </main>
    /*       export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <section className={styles.content}>
        <Services />
        <Information />
        <Map />
      </section>
    </main>
  );
} */

    /*    <input type="checkbox" id="hide-checkbox" />
        <label for="hide-checkbox" className={style.toggle}>
          <span className={style.toggle-button}>
            <span className={style.crater crater-1}></span>
            <span className={style.crater crater-2}></span>
            <span className={style.crater crater-3}></span>
            <span className={style.crater crater-4}></span>
            <span className={style.crater crater-5}></span>
            <span className={style.crater crater-6}></span>
            <span className={style.crater crater-7}></span>
          </span>
          <span className={style.star star-1}></span>
          <span className={style.star star-2}></span>
          <span className={style.star star-3}></span>
          <span className={style.star star-4}></span>
          <span className={style.star star-5}></span>
          <span className={style.star star-6}></span>
          <span className={style.star star-7}></span>
          <span className={style.star star-8}></span>
        </label> */
  );
}
