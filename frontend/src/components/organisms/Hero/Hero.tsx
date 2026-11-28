import ArrowIcon from "../../atoms/ArrowIcon";
import Button from "../../atoms/Button";
import Eyebrow from "../../atoms/Eyebrow";
import ConnectionCard from "../ConnectionCard";
import styles from "./Hero.module.css";

const STEPS = ["Escutar", "Conectar", "Transformar"];

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Eyebrow>Seu desafio. Nosso ponto de partida.</Eyebrow>

          <h1 id="hero-title" className={styles.title}>
            Tecnologia
            <br className={styles.breakMobile} /> para
            <br className={styles.breakDesktop} /> o seu
            <br className={styles.breakMobile} /> próximo
            <br className={styles.breakDesktop} /> passo.
          </h1>

          <p className={styles.description}>
            Conte à ASCII o que sua empresa precisa resolver. Vamos conversar sobre o próximo passo
            para o seu negócio.
          </p>

          <div className={styles.cta}>
            <Button href="#contact" variant="inverse">
              Solicite seu orçamento
            </Button>
          </div>

          <p className={styles.note}>Uma conversa direta, de empresa para empresa.</p>
        </div>

        <div className={styles.card}>
          <ConnectionCard />
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <li key={step} className={styles.step}>
              {index > 0 && <ArrowIcon size={10} />}
              <span>[ {step} ]</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Hero;
