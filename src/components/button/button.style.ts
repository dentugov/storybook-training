import styled from 'styled-components';
import { ButtonProps } from './button';

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  background-color: #1D4466;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #173652;
  }

  ${props => props.size === 'small' && `
    padding: 4px 12px;
  `}

  ${props => props.variant === 'primary' && `
    font-weight: 500;
    color: #9C9DA0;
    background-color: #1F1F1F;
  `}

  ${props => props.variant === 'outline' && `
    font-weight: 500;
    color: #9C9DA0;
    background-color: transparent;
    box-shadow: inset 0 0 0 1px #5c5c5c;

    &:hover {
      background-color: rgba(20, 20, 20, 0.04);
    }
  `}
`;

export const StartIcon = styled.span`
  display: flex;
  margin: auto;
  margin-right: 6px;
`;

export const EndIcon = styled.span`
  display: flex;
  margin: auto;
  margin-left: 6px;
`;
