import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { MaterialPage, LoanPage, LostPage, Login } from '../pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/materials" auth component={MaterialPage} />
    <Route path="/loans" auth component={LoanPage} />
    <Route path="/losts" auth component={LostPage} />
  </Switch>
);

export default Routes;
