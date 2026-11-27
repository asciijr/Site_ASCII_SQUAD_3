import type { ReactNode } from "react";
import styles from "./PromptBar.module.css";

interface PromptBarProps {
  children: ReactNode;
}

function PromptBar({ children }: PromptBarProps) {
  return (
    <div className={styles.bar}>
      <span className={styles.prompt} aria-hidden="true">
        &gt;_
      </span>
      <span>{children}</span>
    </div>
  );
}

export default PromptBar;
