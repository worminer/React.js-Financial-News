import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NotFoundPage from './components/common/NotFoundPage';

import HomePage from './components/HomePage';


const routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route component={NotFoundPage}/>
  </Switch>
);

export default routes;