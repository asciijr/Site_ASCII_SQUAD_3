import ArrowIcon from "../../atoms/ArrowIcon";
import ContextBlock from "../../molecules/ContextBlock";
import PromptBar from "../../molecules/PromptBar";
import styles from "./ConnectionCard.module.css";

function ConnectionCard() {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <p className={styles.title}>ASCII / Conexões</p>
        <span className={styles.status} aria-hidden="true" />
      </div>

      <div className={styles.symbol} aria-hidden="true">
        <span>{"{"}</span>
        <ArrowIcon />
        <span>{"}"}</span>
      </div>

      <p className={styles.headline}>
        O começo de uma solução
        <br />é entender o seu desafio.
      </p>

      <div className={styles.details}>
        <ContextBlock label="01 / O seu contexto" question="Onde sua empresa quer chegar?" />
        <PromptBar>Vamos construir esse caminho.</PromptBar>
      </div>
    </div>
  );
}

export default ConnectionCard;
