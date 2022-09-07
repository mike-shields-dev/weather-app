import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  it("correctly renders LocationDetails component", () => {
    const { location } = forecast;
    render(<App location={location} />);
    const h1Element = screen.getByText(`${location.city}, ${location.country}`);
    expect(h1Element).toBeInTheDocument();
  });
});
