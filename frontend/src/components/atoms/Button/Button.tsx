import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "inverse";
  fullWidth?: boolean;
}

function Button({ children, href, variant = "primary", fullWidth = false }: ButtonProps) {
  const className = [styles.button, styles[variant], fullWidth ? styles.fullWidth : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={className} href={href}>
      <span>{children}</span>
      <span className={styles.icon} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default Button;
