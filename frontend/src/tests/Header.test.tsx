import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Header from "../components/organisms/Header";

describe("Header", () => {
  it("deve exibir a navegação principal e a chamada para orçamento", () => {
    render(<Header />);

    // hidden: true porque o CSS esconde o nav no mobile; nesse caso o nome acessível
    // vem vazio, então conferimos o aria-label direto no atributo
    expect(screen.getByRole("navigation", { hidden: true })).toHaveAttribute(
      "aria-label",
      "Principal"
    );
    expect(screen.getByRole("link", { name: "Soluções", hidden: true })).toHaveAttribute(
      "href",
      "#solutions"
    );
    expect(
      screen.getByRole("link", { name: /solicite seu orçamento/i, hidden: true })
    ).toBeInTheDocument();
  });

  it("deve abrir o menu mobile e fechá-lo ao escolher uma seção", () => {
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const mobileNav = screen.getByRole("navigation", { name: "Menu mobile" });

    fireEvent.click(within(mobileNav).getByRole("link", { name: "Portfólio" }));

    expect(screen.queryByRole("navigation", { name: "Menu mobile" })).not.toBeInTheDocument();
  });
});
