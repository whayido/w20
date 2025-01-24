/* import localFont from "next/font/local"; */
import "../styles/style.scss";
import Header from "../components/Header/header";
/* import {Main} from '../utils/fonts' */
import Footer from "../components/Footer/footer";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
 */
export const metadata = {
  title: "Whayido",
  description: "web-design",
  charset: "utf-8",
  robots: "index, follow",
  author: "Whayido",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "w20",
    description: "whayido",
    url: "https://www.w20.com",
    type: "website",
    locale: "ru_RU",
    siteName: " w20",
    images: [
      {
        url: "/favicon.ico",
        width: 900,
        height: 500,
        alt: "whayido",
      },
    ],
  },
  appleMobileWebAppStatusBarStyle: "#f4f4f4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link
          data-rh="true"
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme:dark)"
        />
        <link
          data-rh="true"
          rel="icon"
          href="/white.png"
          media="(prefers-color-scheme:light)"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f4f4f4" />

        {/* <meta name="yandex-verification" content="ef5c49e4465dfda4" /> */}
      </head>
      <body /* className={`${geistSans.variable} ${geistMono.variable}`} */>
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
}
