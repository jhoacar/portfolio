import useStar from "../useStar";
import styles from "./MediumStar.module.scss";

function MediumStar() {
  const { x, y } = useStar();
  return <circle className={styles.star} cx={x} cy={y} r="2" />;
}

export default MediumStar;
