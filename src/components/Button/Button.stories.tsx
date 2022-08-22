import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Button, IButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click Me',
  } as IButtonProps,
} as Meta;

export const Default: Story<IButtonProps> = (args) => <Button {...args} />;
