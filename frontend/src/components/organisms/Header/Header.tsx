import { useState } from "react";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Soluções", href: "#solutions" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Como funciona", href: "#how-it-works" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="top" className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logoLink} href="#top">
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button href="#contact">Solicite seu orçamento</Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" className={styles.mobileNav} aria-label="Menu mobile">
          <ul className={styles.mobileList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  className={styles.mobileLink}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
