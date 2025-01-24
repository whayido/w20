import Link from "next/link";
import styles from "./footer.module.scss";
import packageJson from "../../../package.json";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <nav>
          <ul className="list">
            {/*    <Link
            href={
              "https://open.spotify.com/user/dxo1lbmbewno5808rcg7x25dm?si=f174f475a3a54599"
            }
          >
            spotify
          </Link> */}

            <li className={styles.item}>
              <Link className={styles.link} href={"https://t.me/Whayido"}>
                telegram
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"mailto:dp10nice@gmail.com"}>
                gmail
              </Link>
            </li>
            <li className={styles.item}>
              {" "}
              <Link
                className={styles.link}
                href={"https://github.com/whayido?tab=repositories"}
              >
                github
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"https://pin.it/4ZugcuF"}>
                pinterest
              </Link>
            </li>
            <li className={styles.item}>
              {" "}
              <Link
                className={styles.link}
                href={"https://instagram.com/whayido?igshid=MmVlMjlkMTBhMg=="}
              >
                instagram*
              </Link>
            </li>
            <li className={styles.item}>
              {" "}
              <Link
                className={styles.link}
                href={"https://www.behance.net/danilpavlov1"}
              >
                behance
              </Link>
            </li>
          </ul>
        </nav>

        <>
          <p className={styles.desc}>
            COYG PiELAVL pielavl PıƎLAVL Whayido iAMMUSiC 100100 8778 w20
            version 1.0 دانيا 2024 Copyright © 2024 - v3.23.14 Vww-0.2.0 wHAyId0
            💕💋
          </p>
          <p id="web">
            created by Whayido self-titled name website 2024 Norilsk.
            <br />
            Россия, 663310, Красноярский край, г. Норильск.
          </p>
          <p className={styles.version}>Версия сайта: {packageJson.version}</p>
        </>
      </footer>
    </>
  );
};

export default Footer;
