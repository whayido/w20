import Link from "next/link";
import styles from "./footer.module.scss";
import packageJson from "../../../package.json";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <nav>
          <Link href={"https://t.me/Whayido"}>telegram</Link>
          <Link href={"mailto:dp10nice@gmail.com"}>gmail</Link>
          <Link href={"https://github.com/whayido?tab=repositories"}>
            github
          </Link>
          {/*    <Link
            href={
              "https://open.spotify.com/user/dxo1lbmbewno5808rcg7x25dm?si=f174f475a3a54599"
            }
          >
            spotify
          </Link> */}
          <Link href={"https://pin.it/4ZugcuF"}>pinterest</Link>
          <Link href={"https://instagram.com/whayido?igshid=MmVlMjlkMTBhMg=="}>
            instagram*
          </Link>
          <Link href={"https://www.behance.net/danilpavlov1"}>behance</Link>
        </nav>

        <div id="end">
          <p id="web">
            created by Whayido self-titled name website 2024 Norilsk.
            <br />
            Россия, 663310, Красноярский край, г. Норильск.
          </p>
          <p className={styles.version}>Версия сайта: {packageJson.version}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
