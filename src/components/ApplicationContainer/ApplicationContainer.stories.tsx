import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ApplicationContainer, IApplicationContainer } from '.';

export default {
  title: 'ApplicationContainer',
  component: ApplicationContainer,
  args: {
    children: <>Container</>,
    graphqlUri: 'http://localhost:8080',
  } as IApplicationContainer,
} as Meta;

export const Default: Story<IApplicationContainer> = (args) => (
  <ApplicationContainer {...args} />
);
