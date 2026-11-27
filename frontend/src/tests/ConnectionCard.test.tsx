import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ConnectionCard from "../components/organisms/ConnectionCard";

describe("ConnectionCard", () => {
  it("deve exibir a frase principal, o contexto e o convite", () => {
    render(<ConnectionCard />);

    expect(screen.getByText(/entender o seu desafio/i)).toBeInTheDocument();
    expect(screen.getByText("Onde sua empresa quer chegar?")).toBeInTheDocument();
    expect(screen.getByText("Vamos construir esse caminho.")).toBeInTheDocument();
  });
});
