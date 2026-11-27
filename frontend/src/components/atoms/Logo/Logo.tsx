import logoSrc from "../../../assets/ascii-logo.svg";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      className={styles.logo}
      src={logoSrc}
      alt="ASCII Soluções em Tecnologia"
      width={180}
      height={61}
    />
  );
}

export default Logo;
