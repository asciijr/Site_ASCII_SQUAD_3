import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  children: ReactNode;
}

function Eyebrow({ children }: EyebrowProps) {
  return <p className={styles.eyebrow}>[ {children} ]</p>;
}

export default Eyebrow;
