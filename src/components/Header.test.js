import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("test header", () => {
  const { getByText } = render(<Header />);
  const MoviesApp = getByText(/Movie App/i);
  expect(MoviesApp).toBeInTheDocument();
});
