import "./styles/reset.css";
import "./styles/globals.css";
import styles from "./layout.module.css";

import MainFooter from "./components/main-footer";
import MainHeader from "./components/main-header";

export const metadata = {
  title: "PokeNext",
  description: "Example Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.mainWrapper}>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
