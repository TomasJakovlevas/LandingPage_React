import React from 'react';

// Styling
import { StyledButton } from './Button.styled';

const Button = ({ action, text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
