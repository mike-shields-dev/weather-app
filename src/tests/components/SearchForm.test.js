import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <SearchForm
        handleChange={jest.fn()}
        handleSubmit={jest.fn()}
        placeHolder="Enter city name"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a search text input", () => {
    const { getByRole } = render(
      <SearchForm
        handleChange={jest.fn()}
        handleSubmit={jest.fn()}
        placeHolder="Enter city name"
      />
    );

    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("search text input renders placeholder text", () => {
    const placeholderText = "Enter city name";

    const { getByTestId } = render(
      <SearchForm
        handleChange={jest.fn()}
        handleSubmit={jest.fn()}
        placeholder={placeholderText}
      />
    );
    const searchInput = getByTestId("search-form-input");
    expect(searchInput.placeholder).toEqual(placeholderText);
  });

  it("typing into the search text input calls handleChange function", async () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SearchForm
        handleChange={handleChange}
        handleSubmit={jest.fn()}
        placeHolder="Enter city name"
      />
    );
    const textInput = getByRole("textbox");

    fireEvent.change(textInput, { target: { value: "Manchester" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("renders a submit button", () => {
    const { getByRole } = render(
      <SearchForm
        handleChange={jest.fn()}
        handleSubmit={jest.fn()}
        placeHolder="Enter city name"
      />
    );

    expect(getByRole("button", { type: "submit" })).toBeInTheDocument();
  });

  it("clicking submit button calls handleSubmit function", () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(
      <SearchForm handleChange={jest.fn()} handleSubmit={handleSubmit} />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
