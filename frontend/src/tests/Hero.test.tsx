import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../components/organisms/Hero";

describe("Hero", () => {
  it("deve exibir o título principal e a chamada para orçamento", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /tecnologia para o seu próximo passo/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /solicite seu orçamento/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("deve exibir as três etapas do processo", () => {
    render(<Hero />);

    expect(screen.getByText("[ Escutar ]")).toBeInTheDocument();
    expect(screen.getByText("[ Conectar ]")).toBeInTheDocument();
    expect(screen.getByText("[ Transformar ]")).toBeInTheDocument();
  });
});
