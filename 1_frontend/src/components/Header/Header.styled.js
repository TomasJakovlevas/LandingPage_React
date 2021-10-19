import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 90px;
  left: 0px;
  top: 0px;

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

  .quickCall_div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .quiclCall_div__phone {
      margin: 0 10px 0 18px;
      background-color: #61c3a1;
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
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
