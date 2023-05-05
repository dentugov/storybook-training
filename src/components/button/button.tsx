import React from 'react';
import { StyledButton } from './button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'medium' | 'small';
  variant?: 'accent' | 'outline' | 'primary';
}

const Button: React.FC<ButtonProps> = ({ size, variant, children, ...restProps }) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

Button.defaultProps = {
  size: 'medium',
  variant: 'accent'
}

export default Button;
