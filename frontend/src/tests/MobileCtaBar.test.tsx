import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MobileCtaBar from "../components/organisms/MobileCtaBar";

describe("MobileCtaBar", () => {
  it("deve exibir o link de orçamento", () => {
    render(<MobileCtaBar />);

    expect(screen.getByRole("link", { name: /solicite seu orçamento/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
