import { FC, ReactNode } from "react";
import styles from "./main-footer.module.css";

type MainFooterProps = {
  children?: ReactNode;
};

const MainFooter: FC<MainFooterProps> = ({ children }: MainFooterProps) => {
  return (
    <footer className={styles.footer}>
      <p>
        Crafted with ♡ by <a href="https://ladybenko.net">ladybenko</a>.
      </p>
    </footer>
  );
};

export default MainFooter;
