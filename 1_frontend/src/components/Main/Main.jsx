import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import AboutUsPage from '../../pages/AboutUsPage';
import BlogPage from '../../pages/BlogPage';
import ContactUsPage from '../../pages/ContactUsPage';
import HomePage from '../../pages/HomePage';
import ServicesPage from '../../pages/ServicesPage';

// Styles
import { StyledMain } from './Main.styled';

const Main = () => {
  return (
    <StyledMain>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutUsPage} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/contact' component={ContactUsPage} />
      </Switch>
    </StyledMain>
  );
};

export default Main;
