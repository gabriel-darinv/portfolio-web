import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import Graphs from '../pages/Graphs';
import Profile from '../pages/Profile';
import Wallet from '../pages/Wallet';

const Routes:React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/wallet">
        <Wallet />
      </Route>
      <Route path="/graphs">
        <Graphs />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
}

export default Routes;