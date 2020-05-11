import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Posts from '../pages/Post/Posts';
import Post from '../pages/Post/Post';

import Albums from '../pages/Album/Albums';
import Album from '../pages/Album/Album';

import Todos from '../pages/Todo/Todos';
import Todo from '../pages/Todo/Todo';

import Users from '../pages/User/Users';
import User from '../pages/User/User';

const Routes = () => {
  return (
    <Switch>
      <Route path="/posts" exact component={Posts}/>
      <Route path="/post/:id" exact component={Post}/>

      <Route path="/albums" exact component={Albums}/>
      <Route path="/album/:id" exact component={Album}/>

      <Route path="/todos" exact component={Todos}/>
      <Route path="/todo/:id" exact component={Todo}/>

      <Route path="/users" exact component={Users}/>
      <Route path="/user/:id" exact component={User}/>
    </Switch>
  );
};

export default Routes;