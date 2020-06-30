import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import user from './user';
import materials from './material';
import loans from './loan';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { user, materials, loans },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
