import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Content } from './components/Content/Content';
import { Posts } from './components/Posts/Posts';
import { Navbar } from './components/Navbar/Navbar';

export const useRoutes = () => {
  
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Navbar />
          <Content />
        </Route>
        <Route path='/posts' >
          <Navbar />
          <Posts/>
        </Route>
      </Switch>
    </>
  )
}