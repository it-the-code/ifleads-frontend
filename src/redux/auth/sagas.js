import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import AuthTypes from './types';
import { signInSuccess } from '.';

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/login', payload);
    const { token } = response.data;
    // Set token to requests
    api.defaults.headers.Authorization = `Baerer ${token}`;
    yield put(signInSuccess({ token }));
    history.push('/materials');
  } catch (err) {
    toast.error('E-mail ou senha incorretos');
  }
}

export default all([takeLatest(AuthTypes.signInRequest, signIn)]);
