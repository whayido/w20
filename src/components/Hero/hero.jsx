import styles from "./_hero.module.scss";
import React from "react";
export default function Hero() {
  return (
    <section className={styles.content}>
      <h1 className={styles.logo}>Whayido</h1>
      <p className={styles.desc}>web-design | frontend-developer</p>
      <a
        href="https://t.me/whayido"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        заказать проект
      </a>
      <>
        <input type="checkbox" className={styles.input} />
        <input
          type="text"
          placeholder="letter words"
          className={styles.input}
        />
      </>
      {/*    <React.Fragment key={index}></React.Fragment> */}
    </section>
  );
}
