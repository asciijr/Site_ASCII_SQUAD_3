import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("deve renderizar o título principal", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Get started" })).toBeInTheDocument();
  });

  it("deve exibir a seção de documentação", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Documentation" })).toBeInTheDocument();
  });

  it("deve incrementar o contador ao clicar no botão", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Count is 0" });

    fireEvent.click(button);

    expect(screen.getByRole("button", { name: "Count is 1" })).toBeInTheDocument();
  });
});
