import React from 'react';

import { screen, render } from '@testing-library/react';

import { ApplicationContainer } from '.';

describe('The ApplicationContainer', () => {
  it('should render correctly', async () => {
    const text = 'children';
    const children = <>{text}</>;
    render(
      <ApplicationContainer graphqlUri="http://localhost:8080">
        {children}
      </ApplicationContainer>
    );

    const container = await screen.findByText(text);

    expect(container).toBeInTheDocument();
  });
});
