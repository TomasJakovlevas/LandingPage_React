import React from 'react';
import { Link } from 'react-router-dom';

// Styling
import { StyledHeader, StyledNavigation } from './Header.styled';

// Fontawesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <StyledHeader>
      <div>LOGO</div>
      <StyledNavigation>
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
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='quickCall_div'>
          <div className='quiclCall_div__phone'>
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <div>
            <span>Road Assistance</span>
            <h4>1800 265 24 52</h4>
          </div>
        </div>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;
