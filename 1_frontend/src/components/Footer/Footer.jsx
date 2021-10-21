import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='wrapper'>
        <div className='logo'>LOGO</div>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
        </div>
        <p>@ Copyright Finsweet {new Date().getFullYear()}</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
