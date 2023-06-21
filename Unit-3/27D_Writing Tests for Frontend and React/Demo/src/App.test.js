/**
 * @jest-environment jsdom
 */

// Import necessary dependencies and extend expect matchers
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Import the component to be tested
import App from "./App";

// Test: renders the App component
test("renders the App component", () => {
  render(<App />);
});

// Test: button click increments the count
test("button click increments the count", () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Find the button element with text "count is 0"
  const button = getByText("count is 0");

  // Simulate a click event on the button
  fireEvent.click(button);

  // Assert that the button's text has changed to "count is 1"
  expect(button.textContent).toBe("count is 1");
});

// Test: renders the Button component with correct props
test("renders the Button component with correct props", () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Find the button element with text "count is 0"
  const button = getByText("count is 0");

  // Assert that the button is present in the document
  expect(button).toBeInTheDocument();
});

// Test: updates the count when setCount function is called
test("updates the count when setCount function is called", () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Find the button element with text "count is 0"
  const button = getByText("count is 0");

  // Simulate multiple click events on the button
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  // Assert that the button's text has changed to "count is 3"
  expect(button.textContent).toBe("count is 3");
});
