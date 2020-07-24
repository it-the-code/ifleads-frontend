import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MaterialPage, LoanPage, LostPage } from './pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={MaterialPage} />
    <Route path="/loans" component={LoanPage} />
    <Route path="/losts" component={LostPage} />
  </Switch>
);

export default Routes;
