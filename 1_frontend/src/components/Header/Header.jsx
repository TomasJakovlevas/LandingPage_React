import React from 'react';

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
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
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
