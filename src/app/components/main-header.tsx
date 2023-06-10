import { FC, ReactNode } from "react";
import Link from "next/link";
import styles from "./main-header.module.css";

type MainHeaderProps = {
  children?: ReactNode;
};

const MainHeader: FC<MainHeaderProps> = ({ children }: MainHeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>Pokédex</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
