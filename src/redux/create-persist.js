import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const createPersist = persistReducer(
    { key: 'ifleads', storage, whitelist: ['auth'] },
    reducers
  );
  return createPersist;
};
