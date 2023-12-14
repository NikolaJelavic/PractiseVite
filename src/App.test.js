import {render, screen} from '@testing-library/react';
import user from '@testing-library/react';

import ButtonPage from './pages/ButtonPage';

test('renders 5 buttons on ButtonPage', async () => {
    render(<ButtonPage />);
  
    // Use a more specific selector if necessary
    const buttons = await screen.findAllByRole('button');
  
    expect(buttons).toHaveLength(5);
  });