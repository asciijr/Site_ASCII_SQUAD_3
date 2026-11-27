import type { ReactNode } from "react";
import ArrowIcon from "../ArrowIcon";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "inverse";
}

function Button({ children, href, variant = "primary" }: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href}>
      <span>{children}</span>
      <ArrowIcon className={styles.icon} size={14} />
    </a>
  );
}

export default Button;
