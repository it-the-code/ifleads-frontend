import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyle from './styles/GlobalStyle';

import Routes from './routes';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
