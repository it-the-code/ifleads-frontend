import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import user from './user';
import materials from './material';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { user, materials },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
