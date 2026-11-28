import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/atoms/Button";

describe("Button", () => {
  it("deve renderizar um link com o texto e o destino informados", () => {
    render(<Button href="#contact">Solicite seu orçamento</Button>);

    const link = screen.getByRole("link", { name: /solicite seu orçamento/i });

    expect(link).toHaveAttribute("href", "#contact");
  });
});
