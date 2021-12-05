import React from 'react';
import { render, fireEvent } from './test-utils';

import App from './App';

interface IButton {
  onClick: () => void;
  children: React.ReactNode
}

const Button = ({ onClick, children }: IButton) => (
  <button role="button" onClick={onClick}>{children}</button>
)

describe('App Layout', () => {
  test('renders Personalised Vitamins', async () => {
    const { getByText } = render(<App />);
    const titleText = getByText(/personalised vitamins/i);
    expect(titleText).toBeInTheDocument();

  });

  test('calls onClick prop when clicked', async () => {
    const handleClick = jest.fn()
    const { findByRole } = render(<Button onClick={handleClick}>Add to basket</Button>)
    fireEvent.click(await findByRole('button', {
      name: /add to basket/i
    }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

})
