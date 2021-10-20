import styled from 'styled-components';
import { Primary } from '../Colors/colors';

export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
  background-color: ${(props) => props.theme.main};
  padding: 16px 40px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

StyledButton.defaultProps = {
  theme: {
    main: Primary,
  },
};

// With ThemeProvider we can change Button theme
// const theme = {
//     main: Black,
//   };
