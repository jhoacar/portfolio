import useStar from "../useStar";
import styles from "./BigStar.module.scss";

function BigStar() {
  const { x, y } = useStar();
  return <circle className={styles.star} cx={x} cy={y} r="5" />;
}

export default BigStar;
