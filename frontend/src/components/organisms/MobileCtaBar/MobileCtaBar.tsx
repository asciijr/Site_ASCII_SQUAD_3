import Button from "../../atoms/Button";
import styles from "./MobileCtaBar.module.css";

function MobileCtaBar() {
  return (
    <div className={styles.bar}>
      <Button href="#contact">Solicite seu orçamento</Button>
    </div>
  );
}

export default MobileCtaBar;
