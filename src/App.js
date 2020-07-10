import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyle from './styles/GlobalStyle';
import { Header } from './components';
import { MaterialPage, LoanPage, LostPage, Login } from './pages';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    {/* <Header /> */}
    <Switch>
      <Route path="/" exact component={MaterialPage} />
      <Route path="/loans" component={LoanPage} />
      <Route path="/losts" component={LostPage} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
