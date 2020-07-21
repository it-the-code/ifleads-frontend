import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import createPersist from './create-persist';
import auth from './auth';
import user from './user';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ auth, user });
const store = configureStore({
  reducer: createPersist(reducers),
  middleware: [sagaMiddleware],
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
