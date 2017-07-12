import React from 'react'
import { Route } from 'react-router'
import authorize from './utilities/Authorize'

import App from './components/App'
import Home from './components/Home'

import UserProfile from './components/user/UserProfile'
import UserRegister from './components/user/UserRegister'
import UserLogin from './components/user/UserLogin'
import UserLogout from './components/user/UserLogout'

import CategoryAddPage from './components/category/CategoryAddPage'
import CreateArticlePage from './components/article/CreateArticlePage'

export default (
  <Route component={App}>
    <Route path='/' component={Home} />

    <Route path='/user/profile/:userId' component={authorize(UserProfile)} />
    <Route path='/user/register' component={UserRegister} />
    <Route path='/user/login' component={UserLogin} />
    <Route path='/user/logout' component={UserLogout} />

    <Route path='/category/add' component={CategoryAddPage} />
    <Route path='/article/add' component={CreateArticlePage} />
  </Route>
)
