import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';

import AuthTypes from './types';
import { signInSuccess } from '.';

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/login', payload);
    console.log(response);
    const { token } = response.data;
    yield put(signInSuccess({ token }));
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest(AuthTypes.signInRequest, signIn)]);
