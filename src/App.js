import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MaterialPage, LoanPage, LostPage } from './pages';
import { Header } from './components';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path="/" exact component={MaterialPage} />
      <Route path="/loans" component={LoanPage} />
      <Route path="/losts" component={LostPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
