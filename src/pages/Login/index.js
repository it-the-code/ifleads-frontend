import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {} from '@reduxjs/toolkit';

import { signInRequest } from '../../redux/auth/actions';

import ifrnLogo from '../../assets/images/ifrn-logo-main.svg';
import banner from '../../assets/images/banner.svg';

import { Container, Left } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    console.log('submit');
    dispatch(signInRequest({ email, password }));
  }

  return (
    <Container>
      <Left>
        <img className="logo" src={ifrnLogo} alt="ifleads" />
        <form onSubmit={submitHandler}>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => {
                setPassowrd(e.target.value);
              }}
            />
          </label>

          <button type="submit">entrar</button>
        </form>
      </Left>

      <img className="main-image" src={banner} alt="things" />
    </Container>
  );
};

export default Login;
