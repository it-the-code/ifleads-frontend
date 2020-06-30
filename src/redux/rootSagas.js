import { all } from 'redux-saga/effects';
import { watchFetchMaterials } from './material/sagas';
import { watchFetchLoans } from './loan/sagas';

function* rootSaga() {
  yield all([watchFetchMaterials(), watchFetchLoans()]);
}

export default rootSaga;
