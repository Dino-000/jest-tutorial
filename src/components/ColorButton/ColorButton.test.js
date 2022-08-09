import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton, { replaceCamelCaseWithSpaces } from "./ColorButton";

test("btn has correct color when initialed", () => {
  render(<ColorButton />);

  //find a btn with a role of button and text of 'changed to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //expect background color is red
  expect(colorButton).toHaveStyle({
    backgroundColor: "MediumVioletRed",
  });

  //click button
  fireEvent.click(colorButton);

  //expect the background turn to blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect button's text to be Change to red
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});
test("initial conditions", () => {
  render(<ColorButton />);
  //check that the button starts out enable
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toBeEnabled();
  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disable button on first clicked & ColorButton appear in the second click", () => {
  render(<ColorButton />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and revert to MediumVioletRed", () => {
  render(<ColorButton />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //disable the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //reenable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});
test("Disabled button has gray background and revert to MidnightBlue", () => {
  render(<ColorButton />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //click button to change color
  fireEvent.click(colorButton);

  //disable the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //reenable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letter", () => {
  test("work for no inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });
  test("work for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("work for multiple inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
