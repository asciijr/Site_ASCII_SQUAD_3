import styles from "./ContextBlock.module.css";

interface ContextBlockProps {
  label: string;
  question: string;
}

function ContextBlock({ label, question }: ContextBlockProps) {
  return (
    <div className={styles.block}>
      <p className={styles.label}>{label}</p>
      <p className={styles.question}>{question}</p>
    </div>
  );
}

export default ContextBlock;
