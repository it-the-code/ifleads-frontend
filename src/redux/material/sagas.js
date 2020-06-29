import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_MATERIALS_SUCCEEDED } from './index';
import api from '../../services/api';

export function* fetchMaterials() {
  const { data } = yield call(api.get, '/materials');
  yield put(FETCH_MATERIALS_SUCCEEDED(data));
}

export function* watchFetchMaterials() {
  yield takeLatest('FETCH_MATERIAL_REQUESTED', fetchMaterials);
}
