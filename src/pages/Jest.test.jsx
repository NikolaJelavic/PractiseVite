// import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM library to use toBeInTheDocument
import userEvent from '@testing-library/user-event';
import Jest from "./Jest";

test("can receive a new user and show it on a list", async () => {
  render(<Jest />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.type(nameInput, "jane"); // Use user.type instead of user.keyboard

  await user.click(emailInput);
  await user.type(emailInput, "jane@jane.com"); // Use user.type instead of user.keyboard

  await user.click(button);

  const name = screen.getByRole("cell", { name: "jane" });
  const email = screen.getByRole("cell", { name: "jane@jane.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
