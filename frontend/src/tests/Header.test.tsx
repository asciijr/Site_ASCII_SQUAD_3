import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
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
});
