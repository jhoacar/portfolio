import useStar from "../useStar";
import styles from "./SmallStar.module.scss";

function BigStar() {
  const { x, y } = useStar();
  return <rect x={x} y={y} width="2" height="1" className={styles.star} />;
}

export default BigStar;
