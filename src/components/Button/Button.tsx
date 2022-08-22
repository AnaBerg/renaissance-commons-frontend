import React from 'react';

import { Button as MuiButton, ButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children } = props;

  return <MuiButton {...props}>{children}</MuiButton>;
};
