import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { FETCH_LOANS_SUCCEEDED } from './index';

export function* fetchLoans() {
  const { data } = yield call(api.get, '/loans');
  yield put(FETCH_LOANS_SUCCEEDED(data));
}

export function* watchFetchLoans() {
  yield takeLatest('FETCH_LOAN_REQUESTED', fetchLoans);
}
