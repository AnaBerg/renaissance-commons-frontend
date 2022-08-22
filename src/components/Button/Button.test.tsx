import React from 'react';

import { screen, render } from '@testing-library/react';

import { Button } from '.';

describe('The Button', () => {
  it('should render correctly', async () => {
    const label = 'Click Me!';
    render(<Button>{label}</Button>);

    const button = await screen.findByText(label);

    expect(button).toBeInTheDocument();
  });
});
