import styled from 'styled-components';

// Colors
import { Black } from '../Colors/colors';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 30px 0;
  background-color: ${Black};
  color: white;

  .wrapper {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 190px;
    }

    ul {
      display: flex;
      justify-content: center;
    }

    ul li {
      display: inline;
      padding: 5px 8px;
      margin: 0 10px;
    }

    ul li a {
      text-decoration: none;
      color: white;
    }

    @media only screen and (max-width: 768px) {
      ul {
        display: none;
      }
    }
  }
`;
