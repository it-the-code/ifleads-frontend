import { all } from 'redux-saga/effects';
import { watchFetchMaterials } from './material/sagas';

function* rootSaga() {
  yield all([watchFetchMaterials()]);
}

export default rootSaga;
