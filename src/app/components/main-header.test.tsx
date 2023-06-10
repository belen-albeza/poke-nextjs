import { expect, describe, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import MainHeader from "./main-header";

describe("<MainHeader />", () => {
  it("Renders navigation menu", async () => {
    render(<MainHeader />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeDefined();

    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0].textContent).toBe("Home");
  });
});
