import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";

import storage from "./storage";
import accountReducer from "./features/accountSlice";
import transactionsReducer from "./features/transactionsSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["account", "transactions"],
};

const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
