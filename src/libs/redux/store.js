import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '~/stores/reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false, // Disable warnings for non-serializable values (redux-persist needs this)
      }),
});

const persistor = persistStore(store);

export { store, persistor };
