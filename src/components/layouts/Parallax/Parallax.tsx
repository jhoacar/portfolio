import { ParallaxProvider } from "react-scroll-parallax";
import styles from "./Parallax.module.scss";

export type ParallaxProps = {
  children: React.ReactNode;
};

function Parallax({ children }: ParallaxProps) {
  return (
    <ParallaxProvider>
      <div className={styles.parallax}>{children}</div>
    </ParallaxProvider>
  );
}

export default Parallax;
