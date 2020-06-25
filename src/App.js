import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MaterialPage, LoanPage, LostPage } from './pages';
import { Header } from './components';
import GlobalStyle from './styles/GlobalStyle';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path="/" exact component={MaterialPage} />
      <Route path="/loans" component={LoanPage} />
      <Route path="/losts" component={LostPage} />
    </Switch>
  </Router>
);

export default App;
