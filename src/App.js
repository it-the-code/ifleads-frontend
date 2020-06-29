import React from 'react';
import { Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import history from './services/history';
import { Header } from './components';
import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

const App = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'FETCH_MATERIAL_REQUESTED' });
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  );
};

export default App;
