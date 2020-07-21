import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global-style';

import history from './services/history';
import Routes from './routes';

const App = () => (
  <Router history={history}>
    <ToastContainer autoClose={3000} />
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
