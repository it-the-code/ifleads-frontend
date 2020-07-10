import React from 'react';

import ifrnLogo from '../../assets/images/ifrn-logo-main.svg';
import banner from '../../assets/images/banner.svg';

import { Container, Left } from './styles';

const Login = () => (
  <Container>
    <Left>
      <img className="logo" src={ifrnLogo} alt="ifleads" />
      <form>
        <label htmlFor="email">
          E-mail
          <input id="email" type="email" placeholder="Digite seu e-mail" />
        </label>

        <label htmlFor="password">
          Senha
          <input id="password" type="password" placeholder="Digite sua senha" />
        </label>

        <button type="submit">entrar</button>
      </form>
    </Left>

    <img className="main-image" src={banner} alt="things" />
  </Container>
);

export default Login;
