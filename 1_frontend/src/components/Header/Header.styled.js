import styled from 'styled-components';
import { Mint, Lightgrey } from '../Colors/colors';

export const StyledHeader = styled.header`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  height: 90px;
  left: 0px;
  top: 0px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    border-right: 1px solid #939191;
    padding: 10px 0;
  }

  ul li {
    display: inline;
    padding: 5px 8px;
    margin: 0 10px;
  }

  ul li a {
    text-decoration: none;
    color: black;
  }

  .quickCall_div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .quiclCall_div__phone {
      margin: 0 10px 0 18px;
      background-color: ${Mint};
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    span {
      font-size: 16px;
      font-weight: 500;
      color: grey;
    }

    h4 {
      font-size: 18px;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledMobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${Lightgrey};
  width: 90%;
  margin: 0 auto;

  ul {
    list-style-type: none;
  }

  ul li {
    text-align: right;
    padding: 5px;
    border-bottom: 1px solid black;
    margin: 5px 0;
  }

  ul li a {
    text-decoration: none;
    color: black;
  }

  .quickCall_div {
    margin-top: 10px;
    padding: 5px;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.div`
  font-size: 30px;
  width: 50px;
  height: 50px;
  background-color: ${Mint};
  color: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
