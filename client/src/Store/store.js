import UserDetailsReducer from "./Slices/UserSlices";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authTokenReducer from "./Slices/AuthTokenSlices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","auth"],
};

const rootReducer = combineReducers({
  user: UserDetailsReducer,
  auth: authTokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
