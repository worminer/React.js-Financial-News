import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../common/NotFoundPage';

import HomePage from '../HomePage';
// user
import RegisterPage from '../user/RegisterPage';
import LoginPage from '../user/LoginPage';
import LogoutPage from '../user/LogoutPage';
import ProfilePage from '../user/ProfilePage';
import UserHomePage from '../user/HomePage';

const routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/user/register' component={RegisterPage}/>
    <Route path='/user/login' component={LoginPage}/>

    <PrivateRoute path='/user/home' component={UserHomePage}/>
    <PrivateRoute path='/user/logout' component={LogoutPage}/>
    <PrivateRoute path='/user/profile' component={ProfilePage}/>

    <Route component={NotFoundPage}/>
  </Switch>
);

export default routes;