import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("should render the input", async () => {
  render(<App />);

  const settings = await screen.findByText("Settings");
  expect(settings).toBeInTheDocument();
  settings.click();

  const payments = await screen.findByText("Payment");
  expect(payments).toBeInTheDocument();
  payments.click();

  const paymentTitle = await screen.findByText("Pay on delivery");
  expect(paymentTitle).toBeInTheDocument();

  // Input Tests

  // input
  const inputName = screen.getByTestId("name-input");
  expect(inputName).toBeInTheDocument();

  fireEvent.change(inputName, { target: { value: "23" } });
  expect(screen.getByText("23")).toBeInTheDocument();

  // textarea
  const textarea = screen.getByTestId("intructions-input");
  expect(textarea).toBeInTheDocument();

  fireEvent.change(textarea, { target: { value: "23" } });
  expect(screen.getByText("23")).toBeInTheDocument();
});
