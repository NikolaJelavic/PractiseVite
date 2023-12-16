import {render,screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows 2 imputs and a button',async()=>{
    render(<UserForm/>);

    const inputs = screen.getAllByRole('textbox');
    const button =screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
 })

 test("it calls onUserAdd when the form is submitted", async () => {
  // NOT THE BEST IMPLEMENTATION
  // Try to render my component
  render(<UserForm />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // Find the button

  // Simulate clicking the button

  // Assertion to make sure 'onUserAdd' gets called with email/name
});
