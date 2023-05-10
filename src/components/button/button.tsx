import React from 'react';
import { EndIcon, StartIcon, StyledButton } from './button.style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'medium' | 'small';
  variant?: 'accent' | 'outline' | 'primary';
  startIcon?: React.ReactNode | null;
  endIcon?: React.ReactNode | null;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, startIcon, endIcon } = props;

  return (
    <StyledButton {...props}>
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      {children}
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </StyledButton>
  )
}

Button.defaultProps = {
  size: 'medium',
  variant: 'accent'
}
