import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { appReducer } from '@/store/app/app.reducer.ts';
import { RootAppState } from '@utils/redux.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { apiService } from '@services/api.service.ts';

const persistConfig = {
  keyPrefix: 'pro:',
  key: 'pro',
  storage: storage,
  stateReconciler: hardSet,
  whitelist: ['config'],
  debug: import.meta.env.MODE === 'development',
  transforms: [
    encryptTransform({
      secretKey: '336205c57461932b98e543c228f236fb077',
      onError: function (error) {
        console.log('Critical Error Transforming Encrypted Data ==>', error);
      }
    })
  ]
};

export const store = configureStore({
  devTools: import.meta.env.MODE === 'development',
  reducer: {
    app: persistReducer<RootAppState>(persistConfig, appReducer),
    [apiService.reducerPath]: apiService.reducer
  },
  middleware: gdm =>
    gdm({
      serializableCheck: false
    }).concat(apiService.middleware)
});

setupListeners(store.dispatch);
