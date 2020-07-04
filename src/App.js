import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import { Header } from './components';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <Header />
    <Routes />
  </Router>
);

export default App;
